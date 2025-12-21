<?php

return [
    'paths' => ['api/*', 'login', 'contact'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['https://benine.qzz.io'],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
