<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Benine/Admin Panel</title>
    <link rel="icon" type="image/png" href="/images/icon.ico"/>
   
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/dashboard.jsx'])

    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body class="bg-gray-50 min-h-screen">

    <div id="admin-root" class=""></div>

    <script>
        window.__INITIAL_CONTACTS__ = @json($contacts);
        window.__USER_NAME__ = @json($userName);
        window.__DELETE_URL_BASE__ = "{{ url('delete') }}";
    </script>
</body>
</html>
