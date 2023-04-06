### Getting started with Markdown file

**What is a Markdown file**   
- A Markdown file is simply a text file with md extensions.
- It is a lightweight markup language for creating formatted text using a plain-text editor.
- It was created by John Gruber and Aaron Swartz in 2004 as a markup language that is appealing to human readers in  its source code form.
- Now Markdown is widely used in readme files, software documentation pages, online forums and so on.

**Some of the basic syntax of the Markdown file**  

---

1. **Headings**   
    The Heading is created with the combination of (#) sign in front of a word or phrase.   
    With the increase in the number of the (#) sign the heading phrase becomes smaller.   
    The Number can go from level 1 to level 6.   
    Always space should be maintained between the sign (#) and the phrase of heading.
     ```md
        # heading level 1
    ```
    # heading level 1

2. **Paragraph**   
    A paragraph can be created like a regular paragraph writing.   
    Simply use a blank line to separate one or more lines of text.
    ```md
    This is a paragraph
    ```
    This is a paragraph

3. **Line Breaks**   
    Line break or new line can be created using  (\<br>) or two or more spaces and type return or enter key.   
    ```md
    This is the first line   
    this is the second line.
    ```   
    This is the first line   
    this is the second line.   

4. **Emphasis**   
    Emphasis can be obtained by making the text bold and italic.   
    **For Bold** - The text or phrase should be surrounded with two asterisks or two underscores  without spaces.   
    *For Italic* - The text or phrase should be surrounded with single asterisks or single underscore without spaces.      
    ***For both Bold and Italic*** - The text or phrase should be surrounded with three asterisks or three underscores without spaces.   
    ```md     
    **This is Bold**   
    *This is Italic*  
    ***This is both Bold and Italic***  
    ```   
    **This is Bold**   
    *This is italic*   
    ***This is both Bold and Italic***
       
5. **Blockquotes**   
    A sign (>) is added in front of a phrase or text to create a blockquote.   
    **Nested Blockquotes** - A sign (>>) is added in front of a phrase or text to create nested blockquote
    ```md
    > This is a blockquote
    > We can put multiple texts or sentences
    >> Thi is a nested blockquote
    ```   
    > This is a blockquote.   
    > We can put multiple text or sentence.   
    >> This is nested blockquote.    
 
6. **List**   
    List can be of ordered or unordered lists where things can be organized.   
    **Ordered Lists** - Ordered lists can be created by using a line items with numbers followed by periods.   
    The number can be in a random order manner but it should start with number one.   
    **Unordered Lists** - A line items with dashes(-), asterisks(*) or plus sign(+) added in front of it with one or more indent to create an Unordered Lists.  
    ```md
    a. order list one 
    b. order list two
    c. order list three   
    - Unorder list one 
    - Unorder list two
    - Unorder list three
    ```   
    1. order list one   
    2. order list two  
    3. order list three   
    - Unorder list one   
    - Unorder list two  
    - Unorder list three   

7. **Code and Code Blocks**  
    **Code** - Code can be added using single  (\` \`) sign before and after the code to be added with no space.      
    **Code Block** - Code block can be added using double backtick (\` \`) sign before and after the code with no space between the backtick and the code.   
    **Escaping Backticks** - Any of the sign used in the markup syntax can be escape by using the backticks (\\) before the phrase.   
      
    code -   
    \`console.log("Hello world")\`  
    `console.log("Hello world")`

    code block -  
    \```javaScript  
    var x = 6;  
    console.log(x)  
    \```
    ```javaScript
    var x = 6
    console.log(x)
    ```   
    Escaping Backticks -   
    \`console.log("hellow world")\`   
    `console.log("hellow world")`
    
8. **Horizontal Row**   
    Horizontal row can be created using three or more asterisks(\*\*\*), dashes(---), or underscores(___) one a line.    
    Asterisk(***)
    ***  
    Dashes(---)

    ---   
    Underscore(___)   
    ___

9. **Links**    
    Links can be created using square bracket and parentheses, the title of the link should be place in  the square bracket and the link should be place inside the parenthesis.   
    After the actual link inside the parenthesis, with one space, link name can be put surrounded by quotation (") sign which popup on mouse over.
    
    ```
    [Learn Code Online](https://web.learncodeonline.in/ "LCO") 
    ```   
     [Learn Code Online](https://web.learncodeonline.in/ "LCO")   

10. **Images**    
    Image can be added by starting with exclamation mark (!) followed by square bracket with the image title and parenthesis with the image path or link.   
    After the link path optional image title can be put surrounded with quotation mark (") with one space, on mouse over the image link will pop out.

    ```md
    ![I write code](https://learncodeonline.in/gittwo.png "coder")
    ```   
     ![I write code](https://learncodeonline.in/gittwo.png "coder")

11. **Tables**
    Tables can be created using the pipe sign which is just above the enter key in the keyboard.   
    
    Demo -
    ```md
     |Table |Goes |Here |
     |---|---|---|
     |One | Two | Three |
    ```   

    *Output* 

    ---
    |Table |Goes |Here |
    |---|---|---|
    |One | Two | Three |

*Reference and further reading* 👉 [markdownguide.org](https://www.markdownguide.org/basic-syntax/ "Mark down Basic syntax")

Thank you for reading ....😃