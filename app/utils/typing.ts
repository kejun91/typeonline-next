export function isAllowedChar(char:string) {
    const allowedChars = [
        // Group 1
        "a", "A", "q", "Q", "z", "Z", "1", "!", "\\", "|", " ",
        // Group 2
        "s", "S", "w", "W", "x", "X", "2", "\"",
        // Group 3
        "d", "D", "e", "E", "c", "C", "3", "?",
        // Group 4
        "f", "F", "g", "G", "r", "R", "t", "T", "v", "V", "b", "B", "4", "5", "$", "%",
        // Group 5
        "h", "H", "j", "J", "y", "Y", "u", "U", "n", "N", "m", "M", "6", "7", "^", "&",
        // Group 6
        "k", "K", "i", "I", ",", "8", "*",
        // Group 7
        "l", "L", "o", "O", ".", "9", "(",
        // Group 8
        ";", "`", "<", ">", ":", "p", "P", "/", "0", ")", "-", "_", "=", "+", "[", "{", "]", "}", "'", "@", "~", "#", "?", "/"
    ];
    
    return allowedChars.includes(char);
}

export function getFingerHintMessage(key:string, layout:string = 'us') {
    let message = '';

    if (key === '#' && layout === 'uk-mac') {
        return '...right hand, little finger';
    } else if (key === '\\' || key === '|' && layout === 'uk-pc') {
        return '...left hand, little finger';
    } else if (key === '~' && layout === 'uk-pc') {
        return '...right hand, little finger';
    }

    switch (key?.toLowerCase()) {
        case 'a':
        case 'q':
        case 'z':
        case '1':
        case '!':
        case '`':
        case '~':
            message = '...left hand, little finger';
            break;
        case 's':
        case 'w':
        case 'x':
        case '2':
        case '@':
            message = '...left hand, ring finger';
            break;
        case 'd':
        case 'e':
        case 'c':
        case '3':
        case '#':
        case '£':
            message = '...left hand, middle finger';
            break;
        case 'f':
        case 'g':
        case 'r':
        case 't':
        case 'v':
        case 'b':
        case '4':
        case '5':
        case '$':
        case '%':
            message = '...left hand, index finger';
            break;
        case 'h':
        case 'j':
        case 'y':
        case 'u':
        case 'n':
        case 'm':
        case '6':
        case '7':
        case '^':
        case '&':
            message = '...right hand, index finger';
            break;
        case 'k':
        case 'i':
        case ',':
        case '8':
        case '*':
            message = '...right hand, middle finger';
            break;
        case 'l':
        case 'o':
        case '.':
        case '9':
        case '(':
            message = '...right hand, ring finger';
            break;
        case ';':
        case 'p':
        case '/':
        case '0':
        case ')':
        case '-':
        case '_':
        case '=':
        case '+':
        case '[':
        case '{':
        case ']':
        case '}':
        case ':':
        case "'":
        case '"':
        case '\\':
        case '|':
        case '?':
        case '>':
        case '<':
            message = '...right hand, little finger';
            break;
        case " ":
            message = "...thumb";
            break;
        default:
            message = ''; // or handle unexpected input
            break;
    }

    return message;
}