import lodash from 'lodash';
import chalk from 'chalk';

const array = [1, 4, 5, 7, 1, 3, 2, 1, 4, 7, 9, 0, 1];
const uniqueNums = lodash.uniq(array)
console.log(chalk.cyan(uniqueNums));

console.log(chalk.blueBright("Hello with chalk!"));