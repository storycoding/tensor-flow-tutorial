# Binary
Makes all numbers up to the length of the bit system as follows

```
index:   5     4     3    2    1    0
value:   32    16    8    4    2    1
```
***index*** is simply the position of the binary digit, starting from the end

**value** = index ^ 2 ( that's why it's called binary )

**X** is the current binary integer ( 0 or 1 )

**row** is the result of **value** * **X**

the **result** of binary is the the sum of all rows


## Example:
```
32    16    8     4     2     1
*     *     *     *     *     *
0     1     0     0     1     0
=     =     =     =     =     =
0     16    0     0     2     0
```
then sum the result of each row:

```
0  +  16 +  0  +  0  +  2  +  0    =   18
```


****

# Quadranary
Follows the same logic as binary, except **value = index ^ 4**

```
index: 5     4      3     2     1     0
value: 1024  256    64    16    4     1
```

**X** is the current quadranary integer

the result of binary is the the sum of all ( value * X )

### Note:
Applied to DNA patterns, we use `A C G T` as our quadranary values `0 1 2 3`

## Example:

DNA pattern:

```
A       T       G       C       A       A
```

In our quadranary system:

```
0       3       2       1       0       0
```

solution:
```
1024    256     64      16      4       1
*       *       *       *       *       *
0       3       2       1       0       0
=       =       =       =       =       =
0       768     128     16      0       0
```

then sum the result of each row:

```
0   +   768  +  128  +  16  +   0   +   0    =   912
```