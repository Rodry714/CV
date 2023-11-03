<!DOCTYPE html>
<html>

<head>
    <style>
        .container {
            width: 100%;
            display: flex;
            justify-content: space-between;
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
</head>

<body>
    <div class="container">
        <div class="column">
            <div class="circle" onclick="document.getElementById('profile-image-upload').click()">
                <img id="profile-image" src="default-image.jpg" class="profile-image">
            </div>
            <input type="file" id="profile-image-upload" accept="image/*" style="display: none;">
            <div class="profile-details" style="display: none;"></div>  
        </div>
        <div class="column"> <!--Esto es de la columna del medio-->
            <div class="profile-info">
                <h3>Setting profile</h3>
                <form>
                    <label for="name">User:</label><br>
                    <input type="text" id="name" name="name" required><br><br>
                    <label for="email">Correo Electrónico:</label><br>
                    <input type="email" id="email" name="email" required><br><br>
                    <label for="phone">Número de Teléfono:</label><br>
                    <input type="text" id="phone" name="phone" required><br><br>
                    <label for="address1">Dirección Línea 1:</label><br>
                    <input type="text" id="address1" name="address1" required><br><br>
                    <label for="address2">Dirección Línea 2:</label><br>
                    <input type="text" id="address2" name="address2" required><br><br>
                    <label for="postcode">Código Postal:</label><br>
                    <input type="text" id="postcode" name="postcode" required><br><br>
                    <label for="state">Estado:</label><br>
                    <input type="text" id="state" name="state" required><br><br>
                    <label for="area">Área:</label><br>
                    <input type="text" id="area" name="area" required><br><br>
                    <label for="education">Educación:</label><br>
                    <input type="text" id="education" name="education" required><br><br>
                    <label for="country">País:</label><br>
                    <input type="text" id="country" name="country" required><br><br>

                    <button class="button" onclick="saveProfile()" style="display: block; margin: 0 auto;">Save
                        Profile</button>

                </form>

            </div>
        </div>
        <div class="column">
            <h3 class="edit-experience">Edit Experience</h3>
            <label for="experience">Experience Designing:</label><br>
            <input type="text" id="experience" name="experience" required><br><br>
            <label for="details">Additional Details:</label><br>
            <input type="text" id="details" name="details" required><br><br>
        </div>


        <script> //Aqui esta la funcion para que podas elegir la foto y se ponga de perfil//
            const profileImage = document.getElementById('profile-image');
            const profileImageUpload = document.getElementById('profile-image-upload');
            const profileDetails = document.querySelector('.profile-details');

            profileImageUpload.addEventListener('change', function () {
                const file = this.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        profileImage.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });

            function saveProfile() {
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                profileDetails.style.display = 'block';
                profileDetails.innerHTML = `<p><strong>Nombre:</strong> ${name}</p><p><strong>Correo Electrónico:</strong> ${email}</p>`;
            }
        </script>
</body>

</html>