canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_img_array = ["nasa_img1.jpg", "nasa_img2.jpg" , "nasa_img3.jpg" , "nasa_img4.jpg"]

random_no= Math.floor(Math.random()*4);

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

background_image = nasa_img_array[random_no];
rover_image = "rover.png";

function add(){
    background_image2 = new Image();
    background_image2.onload = upload_background;
    background_image2.src = background_image;

    rover_image2 = new Image();
    rover_image2.onload = upload_rover;
    rover_image2.src = rover_image;
}

function upload_background(){
    ctx.drawImage(background_image2 , 0 , 0 , canvas.width , canvas.height);
}

function upload_rover(){
    ctx.drawImage(rover_image2 , rover_x , rover_y , rover_width , rover_height);
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e){
    key_press = e.keyCode;
    console.log(key_press);
    if(key_press =="38"){

        up();
        console.log("Up");
    }

    if(key_press =="40"){

        down();
        console.log("Down");
    }

    if(key_press =="39"){

        right();
        console.log("Right");
    }

    if(key_press =="37"){

        left();
        console.log("Left");
    }
}

function up(){
    if(rover_y>=0){
        rover_y = rover_y - 10;
        console.log("when up arrow is pressed, x= "+ rover_x + "and y = "+ rover_y);
        upload_background();
        upload_rover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y = rover_y + 10;
        console.log("when down arrow is pressed, x= "+ rover_x + "and y = "+ rover_y);
        upload_background();
        upload_rover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x = rover_x - 10;
        console.log("when left arrow is pressed, x= "+ rover_x + "and y = "+ rover_y);
        upload_background();
        upload_rover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x = rover_x + 10;
        console.log("when right arrow is pressed, x= "+ rover_x + "and y = "+ rover_y);
        upload_background();
        upload_rover();
    }
}