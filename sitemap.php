<?php
header("Content-type: text/xml");
header('Pragma: public');
header('Cache-control: private');
echo '<?xml version="1.0" encoding="UTF-8" ?>';
?>

<urlset xmlns="http://www.google.com/schemas/sitemap/0.84" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.google.com/schemas/sitemap/0.84 http://www.google.com/schemas/sitemap/0.84/sitemap.xsd">

    <url>
        <loc>https://awesomecoderdev.github.io/</loc>
        <priority>1.00</priority>
    </url>

    <url>
        <loc>https://awesomecoderdev.github.io/#home</loc>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
        <lastmod><?php echo date("Y-m-d"); ?></lastmod>
    </url>

    <url>
        <loc>https://awesomecoderdev.github.io/#skills</loc>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
        <lastmod><?php echo date("Y-m-d"); ?></lastmod>
    </url>

    <url>
        <loc>https://awesomecoderdev.github.io/#testmonials</loc>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
        <lastmod><?php echo date("Y-m-d"); ?></lastmod>
    </url>

    <url>
        <loc>https://awesomecoderdev.github.io/#about</loc>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
        <lastmod><?php echo date("Y-m-d"); ?></lastmod>
    </url>

    <url>
        <loc>https://awesomecoderdev.github.io/#contact</loc>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
        <lastmod><?php echo date("Y-m-d"); ?></lastmod>
    </url>

</urlset>