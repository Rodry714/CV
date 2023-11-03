<script setup>
import Layout from '../Layouts/Layout.vue';
</script>

<template>
    <Layout>
    <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="column grid grid-cols-1 place-items-center up">
            <img src="../../img/Logos/userorange.png" class="w-16 md:w-32 lg:w-48">
        </div>
        <div class="column"> <!--Esto es de la columna del medio-->
            <div class="profile-info">
                <h3>Personal profile</h3>
                <form>
                    <label for="name">Name</label><br>
                    <input type="text" id="name" name="name" required><br><br>
                    <label for="name">Lastname</label><br>
                    <input type="text" id="name" name="name" required><br><br>
                    <label for="edad">Age</label><br>
                    <input type="text" id="name" name="edad" required><br><br>
                    <label for="email">E-mail</label><br>
                    <input type="email" id="email" name="email" required><br><br>
                    <label for="phone">Cellphone</label><br>
                    <input type="text" id="phone" name="phone" required><br><br>
                    <label for="nickname">Nickname</label><br>
                    <input type="text" id="nickname" name="nickname" required><br><br>
                    <button class="button" onclick="saveProfile()" style="display: block; margin: 0 auto;">Save
                        Profile</button>

                </form>

            </div>
        </div>
        <div class="column">
            <h3 class="edit-experience">Profesional profile</h3>
            <label for="direccion">Direction</label><br>
            <input type="text" id="direccion" name="direccion" required><br><br>
            <label for="details">University graduate</label><br>
            <input type="text" id="details" name="details" required><br><br>
            <label for="details">Specialization</label><br>
            <input type="text" id="details" name="details" required><br><br>
        </div>
</div>
</Layout>
</template>

<style scoped>
        .container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            background-color: #FFA244;
        }

        .column {
            width: 30%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 10px;
            background-color: #f9f9f9;
            margin: 10px;
        }

        .circle {
            width: 150px;
            height: 150px;
            background-color: #ccc;
            border-radius: 50%;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
        }

        .profile-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .profile-info {
            text-align: left;
            margin-top: 10px;
        }

        .button {
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            margin-top: 10px;
        }

        .edit-experience {
            text-align: center;
            margin-top: 20px;
        }

        .profile-details {
            text-align: center;
        }

        input[type="text"],
        input[type="email"] {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }

        input[type="file"] {
            display: none;
        }
    </style>
