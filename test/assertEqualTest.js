const assertEqual = require('../assertEqual');


assertEqual("Lighthouse Labs" , "Bootcamp");
assertEqual(1,1);

// Comparing identical strings
assertEqual("Ekin", "Ekin");

// Comparing non-identical strings
assertEqual("Ekin", "Ceyda");
// Comparing identical numbers
assertEqual(5,5);
// Comparing non-identical numbers
assertEqual(11, 11.11);
