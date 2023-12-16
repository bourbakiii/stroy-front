<template>
    <div  class="w-full flex flex-col items-center justify-center">
        
    <div class="
    bg-white rounded-lg shadow-md lg:shadow-lg w-full max-w-[500px] self-center">

    <!-- Card Title -->
    <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
        Login
    </h2>

    <form class="p-md" method="POST" action='projects'>
        <!-- Email Input -->
        <label for="email" class="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
        <input id="email" type="email" name="email" placeholder="e-mail address" autocomplete="email"
            class="block w-full py-3 px-1 mt-2 
            text-gray-800 appearance-none 
            border-b-2 border-gray-100
            focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required />

        <!-- Password Input -->
        <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
        <input id="password" type="password" name="password" placeholder="password" autocomplete="current-password"
            class="block w-full py-3 px-1 mt-2 mb-4
            text-gray-800 appearance-none 
            border-b-2 border-gray-100
            focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required />

        <!-- Auth Buttton -->
        <RouterLink to="/"
            class="w-full py-3 mt-10 bg-blue-400 rounded-xl
            font-medium text-white uppercase
            focus:outline-none hover:bg-blue-500  hover:shadow-xl">
            Login
        </RouterLink>

        <!-- Another Auth Routes -->
        <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">

            <RouterLink to="/register" class="flex-2 underline">
                Create an Account
            </RouterLink>
        </div>
    </form>
</div>
</div>

</template>
