# Get path of this script
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# Theme path no supplied
if [ -z "$1" ]; then
  echo "Usage: $BASH_SOURCE <path/to/theme>"
  exit 1
fi

# Destination path doesn't look like a theme
if [ ! -f "$1/.stencil" ]; then
  echo "No .stencil file found in destination directory. Halting."
  exit 1
fi

sync() {
  echo
  echo "----- Installing $1"
  echo
  rsync -v -h -r -i --delete "$2" "$3"
}

sync "Templates" "$DIR/templates/account" "$1/templates/"
sync "Styles" "$DIR/assets/scss/pages/_account.scss" "$1/assets/scss/modules/account/"
sync "Scripts" "$DIR/assets/js/theme/account.js" "$1/assets/js/theme/"
