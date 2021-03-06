# Password-Genius
A "catchy" password creator using the Genius API

## Demo
![](https://github.com/griffin-mcshane/Password-Genius/blob/master/src/demo.gif)
	
**Note:** Because this app extends the use of the Genius API Cross Origin Resource Sharing (CORS) is required for the app to function normally.  Some browsers may have CORS blocked by default (in JavaScript APIs). Since this is a client browser issue, you must make sure that Cross-Origin XMLHttpRequests is allowed for this app to properly function.  Find out how to set up your browser to allow CORS [here](https://medium.com/swlh/avoiding-cors-errors-on-localhost-in-2020-5a656ed8cefa).

## About
The most recent guidance on safe password practices from the National Institute of Standards and Technology (NIST) rolled back its previous assumptions on strict complexity requirements.  While the addition of special characters, numbers, and uppercase letters should create more secure passwords, NIST found that strict character requirements were counterproductive.  As password requirements increase in complexity, many users begin to write their password down near their desk or recycle old passwords with only minimal changes.  Additionally, the NIST recommended a shift away from hints or knowledge-based authentication (KBA).  While hints and KBAs are supposed to facilitate the use of complex passwords, NIST found that user hints more often resembled plain text passwords then they did ‘hints.’

Despite companies’ best efforts to get employees to protect their systems, 37% of credential theft breaches used stolen or weak credentials.  The Verizon Business 2020 Data Breach Investigations Report further specified that 22% of data breaches were the result of human error.  With the ever-present threat of stolen information off the internet, there is an increased need of creating unique, complex passwords to protect privacy online.  Yet, there is also an equally pressing need to scale back some of these difficult passwords.

The paradoxical effect that complex passwords has on computer security raises an important question: how do we maintain the practice of using secure passwords without risking human error?  Password Genius is my attempt at answering this question.

Password Genius demonstrates how to create "catchy" and memorable passwords by using acronyms and mnemonic phrases.  To do so, the react application leverages the Genius API to generate a non-dictionary password from the first letter of each word in a song's chorus.  Applying Password Genius to Tame Impala's "The Less I Know The Better," for example, would give you the password OmlcysybmsIdsyccyltchm.  Even if you choose to only use a portion of this acronym, this password creation method can still be effective.  A quick test on Better Buy's password cracking time estimator (not the most reliable source, but much easier than brute-forcing the password myself) held that the first eight characters of the Tame Impala password would take just over a month to crack. Because of the acronym's pseudo-randomness, this password would also be relatively resilient against spear-phishing and dictionary-based attacks.

My goal for creating this app was not to create a new standard for corporate password generation, but rather to demonstrate a simple but secure way to create passwords.  A 2019 survey of 11 million UK residents found that one in four user passwords were “inspired” by their pet’s name.  Even if your good boy or girl is named “D;yGpQa38B*9#y?j” (but more likely it’s Cooper or Luna), using your pet's name as a password is still insecure because it leaves you significantly more susceptible to spear phishing attacks.  Yet, despite knowing it's a bad idea, we still find ourselves stuck using the same identifiable things like pet names, birthdays, and locations as our passwords.

Creating unique passwords can be difficult, and it can be even more difficult to remember them.  For those early mornings at work when Windows requires you to change your password, mnemonic phrase and acronym techniques can help you overcome that creative block and save you a trip down to the IT department the following Monday.

To conclude, I would like to thank Genius for opening up their API and making this app possible and ZwillGen for giving me the inspiration to sit down and create it.  Enjoy.

