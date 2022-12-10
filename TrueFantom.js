(function(Scratch) {
  'use strict';
  
  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjY3LC02Ny4zMjI2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTI3LjMyMjY4LDE4MGMwLC02Mi4yMzAwMSA1MC40NDczOSwtMTEyLjY3NzQgMTEyLjY3NzQsLTExMi42Nzc0YzYyLjIzMDAxLDAgMTEyLjY3NzQsNTAuNDQ3MzkgMTEyLjY3NzQsMTEyLjY3NzRjMCw2Mi4yMzAwMSAtNTAuNDQ3MzksMTEyLjY3NzQgLTExMi42Nzc0LDExMi42Nzc0Yy02Mi4yMzAwMSwwIC0xMTIuNjc3NCwtNTAuNDQ3MzkgLTExMi42Nzc0LC0xMTIuNjc3NHoiIGZpbGw9IiM0MDQwNDAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjE4LjUiPjxwYXRoIGQ9Ik0yNDAuNzA5NTksMTI0Ljc4MTI1djQ5LjEzMzIyYzAsNS4xOTY2MSAtMi42NDM3NCw2Ljc5NDk2IC03Ljg0MDQ2LDYuNzk0OTZoLTQ3LjA0MjQ4Yy01LjE5NzY4LDAgLTcuODQwNDYsLTEuNTk4NCAtNy44NDA0NiwtNi43OTQ5NnYtNDkuMTMzMjFjMCwtNS4xOTY2IDIuNjQyNzgsLTYuNzk0OTYgNy44NDA0NiwtNi43OTQ5Nmg0Ny4wNDI0OGM1LjE5NTU5LDAgNy44NDA0NiwxLjU5ODQgNy44NDA0Niw2Ljc5NDk2eiIvPjxwYXRoIGQ9Ik0zMDIuMDEzODIsMTg2LjA4NTUydjQ5LjEzMzIyYzAsNS4xOTY2MSAtMi42NDM3NCw2Ljc5NDk2IC03Ljg0MDQ1LDYuNzk0OTZoLTQ3LjA0MjQ5Yy01LjE5NzY4LDAgLTcuODQwNDYsLTEuNTk4NCAtNy44NDA0NiwtNi43OTQ5NnYtNDkuMTMzMjFjMCwtNS4xOTY2IDIuNjQyNzgsLTYuNzk0OTYgNy44NDA0NiwtNi43OTQ5Nmg0Ny4wNDI0OWM1LjE5NTU4LDAgNy44NDA0NSwxLjU5ODQgNy44NDA0NSw2Ljc5NDk2eiIvPjwvZz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMTIuNjc3MzI1OjExMi42Nzc0MDUtLT4=';

  class Fantøm {

    constructor() {}

    getInfo() {
      return {

        id: 'Fantom',
        name: 'Fantøm',
        
        color1: '#404040',
        color2: '#3a3a3a',
        color3: '#333333',

        menuIconURI: icon,

        blocks: [
          
          { 
            opcode: 'str_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] == [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'APPLE'
              }
            }
          },
          
          {
            opcode: 'str_cont_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] contains [B] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'A'
              }
            }          
          },
          
          '---',
          
          {
            opcode: 'xor_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] xor [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
              }
            }
          },    
          
          {
            opcode: 'equ_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] equ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
              }
            }
          },
          
          '---',
          
          {
            opcode: 'less_or_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≤ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ''
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '50'
              }
            }
          },
          
          {
            opcode: 'more_or_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≥ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ''
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '50'
              }
            }
          },                
          
          '---',
          
          {
            opcode: 'string_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          
          {
            opcode: 'string_in_boolean_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          
          {
            opcode: 'bool_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[BOOL]',
            arguments: {
              BOOL: {
                type: Scratch.ArgumentType.STRING,  
                menu: 'bool_menu'
              }
            }
          },
          
          '---',             
          
          {
            opcode: 'exponent_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] ^ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '3'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              }
            }
          },       
          
          {
            opcode: 'root_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[ROOT] √ [NUM]',
            arguments: {
              ROOT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '4'
              }
            }
          },
          
          {
            opcode: 'negative_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '- [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '5'
              }
            }
          },  
          
          '---',
          
          {
            opcode: 'date_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'current [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                menu: 'date_menu'
              }  
            }
          },
          
          '---',
          
          {
            opcode: 'value_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                menu: 'value_menu'
              }
            }
          },
          
          '---',
          
          {
            opcode: 'ternary_operator_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'if [A] else [B] of [BOOL]',
            arguments: {
              BOOL: {
                type: Scratch.ArgumentType.BOOLEAN
              },
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          
          '---',
          
          {
            opcode: 'start_end_letters_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'letters [START] to [END] of [STRING]',
            arguments: {
              START: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              END: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '3'
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          
          {
            opcode: 'letter_replace_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'replace letter [NUM] with [NEWSTRING] of [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '3'
              },
              NEWSTRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'l'
              }
            }
          },
          
          {
            opcode: 'start_end_letters_replace_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'replace letters [START] to [END] with [NEWSTRING] of [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              START: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              END: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '3'
              },
              NEWSTRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'ggg'
              }
            }
          },
          
          '---',
          
          {
            opcode: 'letter_case_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[OPER] [TEXT]',
            arguments: {
              OPER: {
                type: Scratch.ArgumentType.STRING,
                menu: 'letter_case_menu'
              },
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'APPLES is cool'
              }
            }
          },
          
          {
            opcode: 'defining_case_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'first character is [OPER] of [TEXT] ?',
            arguments: {
              OPER: {
                type: Scratch.ArgumentType.STRING,
                menu: 'defining_case_menu'
              },
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          
          {
            opcode: 'sensitive_case_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'first character is case sensitive of [TEXT] ?',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '1 apple'
              }
            }
          },
          
          '---',
          
          {
            opcode: 'word_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'word [NUM] separated by [SEPER] of [STRING]',
            arguments: {
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'red apple'
              },
              SEPER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              } 
            }
          },
          
          {
            opcode: 'start_end_words_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'words [START] to [END] separated by [SEPER] of [STRING]',
            arguments: {
              START: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              },
              END: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '3'
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'delicious red apple'
              },
              SEPER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              } 
            }
          },
            
          {
            opcode: 'word_count_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'word count separated by [SEPER] of [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'red apple'
              },
              SEPER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              } 
            }
          },          
          
          '---',
          
          {
            opcode: 'new_line_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'new line',
            disableMonitor: true,
            arguments: {}
          },
          
          {
            opcode: 'line_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'line [NUM] of [STRING]',
            arguments: {
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'red apple'
              }
            }
          },
          
          {
            opcode: 'start_end_lines_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'lines [START] to [END] of [STRING]',
            arguments: {
              START: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              END: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'delicious red apple'
              }
            }
          },
          
          {
            opcode: 'line_count_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'line count of [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'red apple'
              }
            }
          }, 
          
          '---',
          
          {
            opcode: 'triple_join_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'join [A] [B] [C]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple '
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana '
              },
              C: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'orange'
              }
            }
          },
          
          {
            opcode: 'reverse_string_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'reverse [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          
          {
            opcode: 'repeat_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'repeat [NUM] times [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              }
            }
          },          
          
          '---',
          
          {
            opcode: 'replace_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'replace [REGEX] with [NEWSTRING] of [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'BANANAs'
              },
              REGEX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana'
              },
              NEWSTRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          
          {
            opcode: 'str_replace_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'str replace [REGEX] with [NEWSTRING] of [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'BANANAs'
              },
              REGEX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana'
              },
              NEWSTRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          
          '---',
          
          {
            opcode: 'unicode_character_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'unicode character [UNICODE]',
            arguments: {
              UNICODE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '2601'
              }
            }
          },
          
          '---',
          
          {
            opcode: 'parse_json_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[PATH] of [JSON_STRING]',
            arguments: {
              PATH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'fruit/apples'
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}'
              }
            }
          },
          
          '---',
          
          {
            opcode: 'is_nan_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is NaN [TEXT] ?',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          
          '---',
          
          {
            opcode: 'get_url_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/hello.txt'
              }
            }
          }
          
        ],
        
        menus: {
           
          letter_case_menu: {  
            items: ['uppercase', 'lowercase', 'capitalize', 'capitalize all', 'swap', 'wave one', 'wave two'],
            acceptReporters: true
          },
          
          defining_case_menu: {
            items: ['uppercase', 'lowercase'],
            acceptReporters: true
          },

          bool_menu: {
            items: ['true', 'false'],
            acceptReporters: true
          },
          
          date_menu: {  
            items: ['millisecond', 'week number'],
            acceptReporters: false
          },
        
          value_menu: {  
            items: ['pi', 'e', 'infinity'],
            acceptReporters: true
          }
          
        }
      }
    }
    
    str_equal_block({A, B}) {
      return String(A) == String(B);
    }

    str_cont_block({A, B}) {
      return String(A).includes(String(B));
    }    
    
    less_or_equal_block({A, B}) {
      return A <= B;
    }

    more_or_equal_block({A, B}) {
      return A >= B;
    }
    
    string_in_boolean_block({STRING}) {
      return String(STRING);
    }    
    
    bool_block({BOOL}) {
      if (typeof BOOL === 'string') {
        if (BOOL.toLowerCase() === 'false') {
          BOOL = false;
        }
      }
      if (Boolean(BOOL)) {
        return true;
      }
      else {
        return false;
      }
    }

    xor_block({A, B}) {
      if (typeof A === 'string') {
        if (A.toLowerCase() === 'false') {
          A = false;
        }
      }
      if (typeof B === 'string') {
        if (B.toLowerCase() === 'false') {
          B = false;
        }
      }
      if (Boolean(A) ^ Boolean(B) > 0) {
        return true;
      }
      else {
        return false;
      }
    }    
    
    equ_block({A, B}) {
      if (typeof A === 'string') {
        if (A.toLowerCase() === 'false') {
          A = false;
        }
      }
      if (typeof B === 'string') {
        if (B.toLowerCase() === 'false') {
          B = false;
        }
      }
      return Boolean(A) == Boolean(B);
    }   
    
    exponent_block({A, B}) {
      return Math.pow(Number(A), Number(B));
    }

    root_block({ROOT, NUM}) {
      return Number(NUM) ** (1/Number(ROOT));
    }
    
    negative_block({A}) {
      return 0 - Number(A);
    }
    
    value_block({A}) {
      if (String(A).toLowerCase() === 'pi') {
        return Math.PI;
      }
      else if (String(A).toLowerCase() === 'e') {
        return Math.E;
      }
      else if (String(A).toLowerCase() === 'infinity') {
        return Infinity;
      }
      else {
        return '';
      }
    }
    
    string_block({A}) {
      return String(A);
    }
    
    date_block({A}) {
      if (String(A).toLowerCase() === 'millisecond') {
        return Date.now() % 1000;
      }
      else if (String(A).toLowerCase() === 'week number') {
        var date = new Date(Date.now());
        return Math.ceil(date.getDate() / 7);
      }
      else {
        return '';
      }
    }
    
    ternary_operator_block({BOOL, A, B}) {
      if (typeof BOOL === 'string') {
        if (BOOL.toLowerCase() === 'false') {
          BOOL = false;
        }
      }
      return Boolean(BOOL) ? String(A) : String(B);
    }

    start_end_letters_block({STRING, START, END}) {
      if (isNaN(START) || isNaN(END)) {
        return '';
      }
      else {
        return STRING.slice(Math.max(1, Number(START)) - 1, Math.min(String(STRING).length, Number(END)));
      }
    }
    
    letter_replace_block({NUM, NEWSTRING, STRING}) {
      if (isNaN(NUM) || Number(NUM) <= 0 || Number(NUM) > String(STRING).length) {
        return String(STRING);
      }
      else {
        return String(STRING).substr(0, Number(NUM)-1) + String(NEWSTRING) + String(STRING).substr(Number(NUM)-1 + String(NEWSTRING).length);
      }
    }
    
    start_end_letters_replace_block({START, END, NEWSTRING, STRING}) {
      if (isNaN(START) || isNaN(END) || Number(START) > Number(END)) {
        return String(STRING);
      }
      else {
        return String(STRING).substr(0, Number(START)-1) + String(NEWSTRING) + String(STRING).substr(Number(END)-1 + String(NEWSTRING).length);
      }
    }

    is_nan_block({TEXT}) {
      return isNaN(TEXT);
    }
    
    get_url_block({URL}) {
      return fetch(String(URL)).then(res => res.text())
        .catch(err => '');
    }

    parse_json_block({PATH, JSON_STRING}) {
      try {
        var path = String(PATH).split('/').map(prop => decodeURIComponent(prop));
        if (path[0] === '') path.splice(0, 1);
        if (path[path.length - 1] === '') path.splice(-1, 1);
        var json;
        try {
          json = JSON.parse(' ' + String(JSON_STRING));
        } catch (e) {
          return e.message;
        }
        path.forEach(prop => json = json[prop]);
        if (json === null) return 'null';
        else if (json === undefined) return '';
        else if (typeof json === 'object') return JSON.stringify(json);
        else return String(json);
      } catch (err) {
        return '';
      }
    }

    reverse_string_block({TEXT}) {
      var emptyStr = '';
      var txt = String(TEXT);
      var localCount = TEXT.length - 1;
      while (localCount != -1) {
        emptyStr = emptyStr + txt.charAt(localCount);
        localCount -= 1;
      }
      return emptyStr;    
    }    
    
    letter_case_block({OPER, TEXT}) {  
      if (String(OPER).toLowerCase() === 'uppercase') {
        return String(TEXT).toUpperCase();
      }
      else if (String(OPER).toLowerCase() === 'lowercase') {
        return String(TEXT).toLowerCase();
      }
      else if (String(OPER).toLowerCase() === 'capitalize') {
        return String(TEXT).charAt(0).toUpperCase() + String(TEXT).slice(1).toLowerCase();
      }
      else if (String(OPER).toLowerCase() === 'capitalize all') {
        var splitStr = String(TEXT).toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' ');
      }
      else if (String(OPER).toLowerCase() === 'swap') {
        var str = String(TEXT);
        var str2 = '';  
        for (var i = 0; i < str.length; i++) {
          if (str[i].toUpperCase()!=str[i].toLowerCase()) {
            if (str[i].toUpperCase()==str[i]) {
              str2 += str[i].toLowerCase();
            } 
            else {
              str2 += str[i].toUpperCase();
            }
          }
          else {str2 += str[i]};
        } 
        return str2;
      }
      else if (String(OPER).toLowerCase() === 'wave one') {
        var str = String(TEXT);
        var str2 = '';
        for (var i = 0; i < str.length; i++) {
          if (i%2 == 0) {
            str2 += str[i].toUpperCase();  
          }
          else {str2 += str[i].toLowerCase()};
        } 
        return str2;
      }      
      else if (String(OPER).toLowerCase() === 'wave two') {
        var str = String(TEXT);
        var str2 = '';
        for (var i = 0; i < str.length; i++) {
          if (i%2 == 0) {
            str2 += str[i].toLowerCase();  
          }
          else {str2 += str[i].toUpperCase()};
        }
        return str2;
      }
      else {
        return '';  
      }
    }
    
    defining_case_block({OPER, TEXT}) {
      if (TEXT === '') {
        return '';
      }
      else {
        if (String(OPER).toLowerCase() === 'uppercase') {
          if (String(TEXT)[0] === String(TEXT)[0].toLowerCase()) {
            return false;
          }
          else {
            return true;
          }
        }
        else if (String(OPER).toLowerCase() === 'lowercase') {
          if (String(TEXT)[0] === String(TEXT)[0].toLowerCase()) {
            return true;
          }
          else {
            return false;
          }
        }
        else {
          return '';
        }
      }
    }
    
    sensitive_case_block({TEXT}) {
      if (TEXT === '') {
        return '';
      }
      else {
        if (String(TEXT)[0].toUpperCase() === String(TEXT)[0].toLowerCase()) {
          return false;
        }
        else {
          return true;
        }
      }
    }
    
    word_block({NUM, STRING, SEPER}) {
      var str = String(STRING);
      var res = str.split(String(SEPER));
      if (res[Number(NUM) - 1] === undefined || isNaN(NUM)) {
        return '';
      }
      else {
        return res[Number(NUM) - 1];
      }
    }
    
    start_end_words_block({START, END, STRING, SEPER}) {
      if (Number(START) <= Number(END) && !isNaN(START) && !isNaN(END)) {
        var str = String(STRING);
        var res = str.split(String(SEPER));
        if (res[Number(START)-1] === undefined) {
          var words = '';
        }
        else {
          var words = res[Number(START)-1];
        }
        for (var i = Number(START)+1; i <= Number(END); i++) {
          if (res[i-1] !== undefined) {
            if (words === '') {
              var words = res[i-1];
            }
            else {
              var words = words + String(SEPER) + res[i-1];
            }
          }
        }
        return words;
      }
      else {
        return '';
      }
    }
    
    start_end_lines_block({START, END, STRING}) {
      if (Number(START) <= Number(END) && !isNaN(START) && !isNaN(END)) {
        var str = String(STRING);
        var res = str.split('\n');
        if (res[Number(START)-1] === undefined) {
          var words = '';
        }
        else {
          var words = res[Number(START)-1];
        }
        for (var i = Number(START)+1; i <= Number(END); i++) {
          if (res[i-1] !== undefined) {
            if (words === '') {
              var words = res[i-1];
            }
            else {
              var words = words + '\n' + res[i-1];
            }
          }
        }
        return words;
      }
      else {
        return '';
      }
    }
    
    word_count_block({STRING, SEPER}) {
      var str = String(STRING);
      var res = str.split(String(SEPER));
      return res.length;
    }
    
    new_line_block(){
      return '\n';
    }
    
    line_block({NUM, STRING}) {
      var str = String(STRING);
      var res = str.split('\n');
      if (res[Number(NUM) - 1] === undefined) {
        return '';
      }
      else {
        return res[Number(NUM) - 1];
      }
    }
    
    line_count_block({STRING}) {
      var lines = String(STRING).split(/\r\n|\r|\n/);
      return lines.length;
    }
    
    triple_join_block({A, B, C}){
      return String(A) + String(B) + String(C);
    }
    
    repeat_block({NUM, TEXT}) {
      return String(TEXT).repeat(Math.floor(Number(NUM)));
    }    
    
    replace_block({STRING, REGEX, NEWSTRING}) {
      REGEX = String(REGEX).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return String(STRING).replace(new RegExp(REGEX, 'gi'), String(NEWSTRING));
    }
    
    str_replace_block({STRING, REGEX, NEWSTRING}) {
      REGEX = String(REGEX).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return String(STRING).replace(new RegExp(REGEX, 'g'), NEWSTRING);
    }
    
    unicode_character_block({UNICODE}) {
      if (/^[a-fA-F0-9]+$/.test(String(UNICODE)) && String(UNICODE).length <= 4) {
        return String.fromCodePoint(parseInt(String(UNICODE), 16));
      }
      else {
        return '';
      }
    }
    
  }

  Scratch.extensions.register(new Fantøm());
  
})(Scratch);
