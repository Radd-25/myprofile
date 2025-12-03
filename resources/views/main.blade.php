<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/images/icon.ico"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Benine/Profile Raddin</title>
    <style> body { background-color: #020618; }</style>
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>
<body>
    <div id="root"></div>
</body>
</html>