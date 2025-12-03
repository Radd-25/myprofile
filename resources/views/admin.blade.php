<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin Panel</title>
    @vite('resources/css/app.css') <!-- pastikan Tailwind sudah di-setup via Vite -->
</head>
<body class="bg-gray-50 min-h-screen p-6">


    <h1 class="text-3xl font-bold text-center mb-8">Admin Panel</h1>

    @if($contacts->isEmpty())
        <p class="text-center text-gray-500">No contacts found.</p>
    @else
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-200 shadow rounded-lg">
                <thead class="bg-gray-100">
                    <tr>
                        <th class="px-6 py-3 text-left text-gray-700 font-semibold">ID</th>
                        <th class="px-6 py-3 text-left text-gray-700 font-semibold">Name</th>
                        <th class="px-6 py-3 text-left text-gray-700 font-semibold">Email</th>
                        <th class="px-6 py-3 text-left text-gray-700 font-semibold">Message</th>
                        <th>
                            <th class="px-6 py-3 text-left text-gray-700 font-semibold">Actions</th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($contacts as $contact)
                        <tr class="border-t">
                            <td class="px-6 py-4">{{ $contact->id }}</td>
                            <td class="px-6 py-4">{{ $contact->name }}</td>
                            <td class="px-6 py-4">{{ $contact->email }}</td>
                            <td class="px-6 py-4">{{ $contact->message }}</td>
                            <td class="px-6 py-4">
                                <form action="{{ route('delete', $contact->id) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this contact?');">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    @endif

</body>
</html>
