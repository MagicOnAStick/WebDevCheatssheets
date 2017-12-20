<?php

echo 'Processing...';

if (isset($_GET['name'])) {
    echo 'Your name is '. $_GET['name'];
}