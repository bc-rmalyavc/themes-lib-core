# Get path of this script
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# Theme path no supplied
if [ -z "$1" ]; then
  echo "Usage: $BASH_SOURCE <path/to/theme>"
  exit 1
fi

# Destination path doesn't look like a theme
if [ ! -f "$1/config.stencil.json" ]; then
  echo "No .stencil file found in destination directory. Halting."
  exit 1
fi

sync() {
  echo
  echo "----- Installing $1"
  echo
  rsync -v -h -r -i --delete "$2" "$3"
}

sync "Templates" "$DIR/templates/core" "$1/templates/"
sync "Styles" "$DIR/assets/scss/core" "$1/assets/scss/"
sync "Scripts" "$DIR/assets/js/theme/core" "$1/assets/js/theme/"
sync "Images" "$DIR/assets/img/core" "$1/assets/img/"
cp "$DIR/webpack" "$1/"

echo
echo "----- Installing Translations and Config"
echo
node "$DIR/install.js" "$1"
echo "done"
