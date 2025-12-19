<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Benine/Login</title>
    <link rel="icon" type="image/png" href="/images/icon.ico"/>
   
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/login.jsx'])

    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
    <div id="login-root" class=""></div>
</body>
</html>