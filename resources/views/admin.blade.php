<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Benine/Admin Panel</title>
    <link rel="icon" type="image/png" href="/images/icon.ico"/>
   
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/admin.jsx'])

    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body class="bg-gray-50 min-h-screen">

    <div id="admin-root" class=""></div>

    <script>
        window.__INITIAL_CONTACTS__ = @json($contacts);
        // Base delete URL (we will send DELETE to `${base}/${id}`)
        // routes/web.php defines the delete route as `/delete/{id}`
        window.__DELETE_URL_BASE__ = "{{ url('delete') }}";
    </script>
</body>
</html>
