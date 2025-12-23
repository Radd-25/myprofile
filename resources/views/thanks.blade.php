<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/images/icon.ico"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Benine/Thanks</title>
    <style> body { background-color: #020618; }   
    /* Universal Selector  */
    *{color: white; font-family: Arial; text-align: left;}

    /* type selector */
    body {background-color: rgb(39, 36, 36); padding: 20px;}
    img {height: 20px; position:absolute; top:480px; margin-left: 5px;}

    /* class selector */
    p.footer {color: gray;}

    /* id selector */
    #greetings {font-size: 35px;}
    #no-joke {color: gray; font-size: small;}
    #b-nojoke {color: gray;}

    /* child selector */
    p>i {color:gray}

    /* decendant selector */
    p a {color: gray;}

    /* adjacent sibling selector */
    h1+p {font-size: medium;}

    /* general sibling selector */
    h1~p {font-size: medium;}
    </style>
</head>
<body>
     <body>
        <h1 id="greetings">Thank you.</h1>
        <p>becouse of your help i can make my first fully fledged website.</p>
        <br>
        <h2>it been a hell of a jurney, i want to say a special thanks to :</h2>
        <ul>
            <li><b>Bang Hachi</b> that have tought me about backend, Hosting, and laravel in general.</li>
            <li><b>Fikri</b> that have introduced me to Tailwind, making my job easier.</li>
            <li><b>Gemini, Copilot, And Chat GPT</b> that work tirelessly to teach and help me to develop this website (ive never work with laravel n react, and i using it on this.)</li>
        </ul>
        <br>
        <h2>on the sides note</h2>
        <ul>
            <li>developing a website is trully fun, and frustating at the same time.</li>
            <li>im working on this blindly, ive never touch Laravel or React before.</li>
        </ul>
        <br>
        <p id="no-joke">this page is using source code from the first website i made.</p>
        <p class="footer"><i>vibe coding my way trough this shit</i> - by <a href="https://github.com/Radd-25">Radd</a></p>
        <p class="footer">23/12/2025 22:33</p>
        <a href="/"><p class="footer">going back this way.</p></a>
    </body>
</html>