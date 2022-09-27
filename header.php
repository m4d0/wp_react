<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>

    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="<?php bloginfo('description'); ?>">

    <?php wp_head(); ?>

    <title><?php the_title(); ?></title>

    <!-- <link rel="stylesheet" href="<?php echo get_template_directory_uri() . '/public/globalCss.css' ?>"> -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri() . '/public/tailwind.css' ?>">

</head>

<body>

   