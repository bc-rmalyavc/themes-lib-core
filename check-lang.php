<?php
/**
 * A small script to show how often each language file translation is being
 * used throughout all the templates.
 *
 * Example Usage:
 *
 * php check-lang.php
 *   Show all translation paths, and how often they are being used.
 *
 * php check-lang.php core.giftcard
 *   Only show usage for translation paths starting with `core.giftcard`
 *
 * Example Output:
 *
 *   -    core.giftcard.heading
 *   -    core.giftcard.purchase.heading
 *   1    core.giftcard.purchase.message
 *   2    core.giftcard.purchase.amount
 *
 *   ^    ^
 *   |    The translation path
 *   |
 *   The number of usages (- is none)
 */

/**
 * Converts a nested object tree into a flat array of paths.
 *
 * Doesn't currently handle array properties.
 *
 * @param $item object
 *        An object tree to parse.
 *
 * @param $prefix string (optional)
 *        A prefix for the paths.
 *
 * @param $separator string (optional)
 *        A string to separate path components by. Defaults to a period.
 *
 * @return array
 *         An array of path => value pairs.
 */
function object_paths($item, $prefix = '', $separator = '.') {
  $paths = array();

  foreach ($item as $key => $value) {
    $path = empty($prefix)
      ? $key
      : $prefix . $separator . $key;

    if (is_object($value)) {
      $paths = array_merge(
        $paths,
        object_paths($value, $path)
      );
    } else {
      $paths[$path] = $value;
    }
  }

  return $paths;
}

/**
 * Returns the number of occurrences of a string throughout all files in a
 * directory.
 *
 * @param $string string
 *        The string to search for.
 *
 * @param $dir string (optional)
 *        The directory path to search in. Defaults to this script's path.
 *
 * @return int
 */
function count_usage($string, $dir = __DIR__) {
  $command = sprintf(
    'grep -nr %s %s',
    $string,
    $dir
  );

  exec($command, $output);
  return sizeof($output);
}


// Arguments
$arg_prefix = $argv[1];

// Read lang json
$json = file_get_contents(__DIR__ . '/lang/en.json');
$lang = json_decode($json);

// Output
$paths = object_paths($lang);

foreach ($paths as $path => $value) {
  if ($arg_prefix) {
    if (strpos($path, $arg_prefix) !== 0) {
      continue;
    }
  }

  $count = count_usage($path);
  $count = $count === 0
    ? '-'
    : $count;

  echo
    str_pad($count, 5),
    $path,
    PHP_EOL;
}
