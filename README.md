### Specs

Describe: robogerSpeaks()

1. Test: "It should return a string error message if a negative number is input."
>  `Expect(robogerSpeaks(-12).toEqual("Mr. Roboger chooses not to respond to your negativity."))`

2. Test: "It should return an array whose values are a list of all of the integers from 0 up to the argument number."
>  `Expect(robogerSpeaks(7).toEqual([0, 1, 2, 3, 4, 5, 6, 7]))`

3. Test: "It should return an array whose values are a list of all integers from 0 up to the argument number, unless the integer includes a 3 digit. All 3-inclusive integers in the list will be replaced with the string, 'Won't you be my neighbor?'"
>  `Expect(robogerSpeaks(4).toEqual([0, 1, 2, 'Won't you be my neighbor?', 4]))`

4. Test: "It should return an array whose values are a list of all integers from 0 up to the argument number, unless the integer includes a 2 and not a 3. All 2-inclusive integers that are also 3-exclusive will be replaced with 'Boop!'"
>  `Expect(robogerSpeaks(14).toEqual([0, 1, 'Boop!', 'Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, 10, 11, 'Boop!', 'Won't you be my neighbor', 14]))`

5. Test: "It should replace any integer inclusive of a 1 but exclusive of 2 and 3, with 'Beep!' in its array to be returned."
>  `Expect(robogerSpeaks(19).toEqual([0, 'Beep!', 'Boop!', 'Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!']))`

6. Test: "It should return a string message requesting only number input if input includes non-number character."
>  `Expect(robogerSpeaks(&6).toEqual("error: Mr. Roboger can only respond to numbers."))`