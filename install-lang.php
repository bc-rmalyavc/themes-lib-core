<?php
/**
 * Installs bc-core language translations into a theme.
 *
 * All translations are placed in a `core` object.
 */

$src_path = __DIR__ . '/lang/en.json';
$theme_path = realpath($argv[1]) . '/lang/en.json';

// Get core lang
$src_json = file_get_contents($src_path);
$src_lang = json_decode($src_json);
echo 'core  ', strlen($src_json), ' ', $src_path, PHP_EOL;

// Get theme lang
$theme_json = file_get_contents($theme_path);
$theme_lang = json_decode($theme_json);
echo 'theme ', strlen($theme_json), ' ', $theme_path, PHP_EOL;

// Update theme lang
$theme_lang->core = $src_lang->core;
$new_json = json_encode($theme_lang, JSON_PRETTY_PRINT);
$new_json = preg_replace('/(^|\G) {4}/m', '  ', $new_json); // 4-to-2 indent
file_put_contents($theme_path, $new_json);

echo 'done', PHP_EOL;
