<?php
/**
 * Installs bc-core language translations into a theme.
 *
 * All translations are placed in a `core` object.
 */

function merge_json($src_path, $dest_path) {
  $src_contents = file_get_contents($src_path);
  $src_json = json_decode($src_contents, true);
  echo 'core  ', strlen($src_contents), ' ', $src_path, PHP_EOL;

  $dest_contents = file_get_contents($dest_path);
  $dest_json = json_decode($dest_contents, true);
  echo 'theme  ', strlen($dest_contents), ' ', $dest_path, PHP_EOL;

  // var_dump($dest_contents);
  // var_dump($dest_json);
  $merged = array_merge($dest_json, $src_json);
  print_r($merged);
}

$theme_path = realpath($argv[1]);

// Merge language files
merge_json(__DIR__ . '/lang/en.json', $theme_path . '/lang/en.json');
return;

// Update theme lang
$theme_lang->core = $src_lang->core;
$new_json = json_encode($theme_lang, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
$new_json = preg_replace('/(^|\G) {4}/m', '  ', $new_json); // 4-to-2 indent
file_put_contents($theme_path, $new_json);

echo 'done', PHP_EOL;
