<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>404 Not Found</title>
    <link rel="icon" type="image/png" href="/images/icon.ico"/>
   
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/404.jsx'])

    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
    <div id="notfound" class=""></div>
</body>
</html>