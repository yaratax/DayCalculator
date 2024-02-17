class Class {

    function checkInput() {
        let userInput = document.getElementById('userInput').value;
        let outputContainer = document.getElementById('outputContainer');
        let contentToDisplay;

        userInput = parseInt(userInput);

        switch (userInput) {
            case 1:
                contentToDisplay = 'Sunday';
                break;
            case 2:
                contentToDisplay = 'Monday';
                break;
            case 3:
                contentToDisplay = 'Tuesday';
                break;
            case 4:
                contentToDisplay = 'Wednesday';
                break;
            case 5:
                contentToDisplay = 'Thursday';
                break;
            case 6:
                contentToDisplay = 'Friday';
                break;
            case 7:
                contentToDisplay = 'Saturday';
                break;
            default:
                contentToDisplay = 'Number out of range!';
                break;
        }
        outputContainer.innerHTML = contentToDisplay;
    }
}