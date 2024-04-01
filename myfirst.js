const UPI = 'User_Profile_Image'

window.onload = _ => {
    RetrieveImageData();
};

function RetrieveImageData() {
    
    var StoredImage = localStorage.getItem(UPI);

    if (!StoredImage) {
        return;
    } else {
        document.getElementById("imgtest").src = StoredImage
    };
};

function OnProfileImageClicked() {
    document.getElementById('my_file').click()
};

function OnFileGiven() {
    try {
    const FileData = document.getElementById('my_file').files[0]
    let ImageData = URL.createObjectURL(FileData);
    document.getElementById("imgtest").src = ImageData;
    localStorage.setItem(UPI, ImageData);
    }
    catch (TypeError) {
        console.log("No image file was given.")
    };
};
