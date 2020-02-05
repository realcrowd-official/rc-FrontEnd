#!/bin/bash
BOLD=$(tput bold)
RESET=$(tput sgr0)
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
BLUE=$(tput setaf 4)
PURPLE=$(tput setaf 5)

echo "${BOLD}============================================================"
echo "${PWD##*/}"
echo "============================================================${RESET}"

#============================================================
# run dev server or lint fix
#============================================================
dev_or_deploy() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}Run dev server (R) / Lint (L)${RESET}" rl
    case ${rl} in

      [Rr]* )
        printf "\n"
        echo "${BOLD}${PURPLE}🔥 Run dev server 🔥${RESET}"
        yarn_start
        git_commit
        break;;

      [Ll]* )
        printf "\n"
        echo "${BOLD}${PURPLE}🔥 Lint 🔥${RESET}"
        yarn lint:fix;
        break;;

      * ) echo "${YELLOW}Please answer with (R)un / (L)int${RESET}";;
    esac
  done
}

#============================================================
# serve with hot reload at localhost:3000
#============================================================
yarn_start() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}yarn start? (Y/n) ${RESET}" yn
    case ${yn} in

      [Yy]* )
        yarn start;
        break;;

      [Nn]* )
        return 0;;

      * ) echo "${YELLOW}Please answer yes or no.${RESET}";;
    esac
  done
}

#============================================================
# git commit
#============================================================
git_commit() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}git commit? (Y/n) ${RESET}" yn
    case ${yn} in

      [Yy]* )
        IFS= read -r -p "${BOLD}Enter commit message: ${RESET}" commitmsg

        printf "\n"
        echo "${BOLD}${PURPLE}🔥 Lint 🔥${RESET}"
        yarn lint:fix;

        # if commitmsg empty
        if [ -z "$commitmsg" ]
        then
          echo "${BOLD}${RED}👻 Commit message is empty 👻${RESET}"
          commitmsg="Add files via upload"
        fi

        printf "\n"
        echo "${BOLD}${PURPLE}🔥 Commit 🔥${RESET}"
        git add .;
        git commit -m "$commitmsg";

        git_push;
        break;;

      [Nn]* )
        return 0;;

      * ) echo "${YELLOW}Please answer yes or no.${RESET}";;
    esac
  done
}

#============================================================
# git push
#============================================================
git_push() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}git push? (Y/n) ${RESET}" yn
    case ${yn} in

      [Yy]* )
        printf "\n"
        echo "${BOLD}${PURPLE}🔥 Push: GitLab 🔥${RESET}"
        git push;
        break;;

      [Nn]* )
        return 0;;

      * ) echo "${YELLOW}Please answer yes or no.${RESET}";;
    esac
  done
}

#============================================================
# main
#============================================================
main() {
  dev_or_deploy
}

main
