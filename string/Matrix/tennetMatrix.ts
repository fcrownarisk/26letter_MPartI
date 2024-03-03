import '../string/wuwuMatrix'
import '../C/abcd'
import '../C/efgh'
import '../C/ijk'
import '../C/lmn'
import '../C/opq'
import '../C/rst' 
import '../ABCDEF/A'
import '../ABCDEF/B'
import '../ABCDEF/C'
import '../ABCDEF/D'
import '../ABCDEF/E'
import '../ABCDEF/F'
import '../ABCDEF/G'
import '../ABCDEF/H'
import '../ABCDEF/I'
import '../ABCDEF/J'
import '../ABCDEF/K'
import '../ABCDEF/L'
import '../ABCDEF/M'
import '../ABCDEF/N'
import '../ABCDEF/O'
import '../ABCDEF/P'
import '../ABCDEF/Q'
import '../ABCDEF/R'
import '../ABCDEF/S'
import '../ABCDEF/T'
import '../ABCDEF/U'
import '../ABCDEF/V'
import '../ABCDEF/W'
import '../ABCDEF/X'
import '../ABCDEF/Y'
import '../ABCDEF/Z'
import '../XYZT/x1y1z1t1'
import '../XYZT/x2y2z2t2'
import '../XYZT/x3y3z3t3'
import '../XYZT/t4z4y4x4'
import '../XYZT/t5y5z5x5'
import '../XYZT/t6z6y6x6'
import '../XYZT/x7y7z7t7z7y7x7'
import '../C/shrink.c'
export const Matrix5: number[][] = [
        [5][25][125][625][3075],
        [147949218750][739746093750][3698730468750][18493652343750][15150],
        [29589843750][57792663574218750][288963317871093750][92468261718750][75750],
        [5917968750][11558532714843750][2311706542968750][462341308593750][378750],
        [1183593750][236718750][47343750][9468750][1893750]
]
export const Matrix6:number[][]=[
    [142857][285714][428517][571428][714285][857142],
    [285714][428517][571428][714285][857142][142857],
    [428517][571428][714285][857142][142857][285714],
    [571428][714285][857142][142857][285714][428517],
    [714285][857142][142857][285714][428517][571428],
    [857142][142857][285714][428517][571428][714285]
]
export const Matrix7:number[][]=[
    [1/7][2/7][3/7][4/7][5/7][6/7],
    [2/7][3/7][4/7][5/7][6/7][1/7],
    [3/7][4/7][5/7][6/7][1/7][2/7],
    [4/7][5/7][6/7][1/7][2/7][3/7],
    [5/7][6/7][1/7][2/7][3/7][4/7],
    [6/7][1/7][2/7][3/7][4/7][5/7]
]
export const matrix8:number[][]=[
    [Math.sin(15)][Math.sin(30)][Math.sin(45)][Math.sin(60)][Math.cos(60)][Math.cos(45)][Math.cos(30)][Math.cos(15)]
    [Math.asin(15)][Math.asin(30)][Math.asin(45)][Math.asin(60)][Math.acos(15)][Math.acos(30)][Math.acos(45)][Math.acos(60)]
    [Math.atan(15)][Math.atan(30)][Math.atan(45)][Math.atan(60)] [Math.atan(60)][Math.tan(45)][Math.tan(30)][Math.tan(15)]
    [Math.exp(8)][Math.exp(7)][Math.exp(6)][Math.exp(5)][Math.exp(4)][Math.exp(3)][Math.exp(2)][Math.exp(1)]
    [Math.log(1)][Math.log(2)][Math.log(3)][Math.log(4)][Math.log(5)][Math.log(6)][Math.log(7)][Math.log(8)]
    [Math.log(10)][Math.log(100)][Math.log(1000)][Math.log(10000)][Math.log(10000)][Math.log(1000)][Math.log(100)][Math.log(10)]
    [Math.acos(15)][Math.acos(30)][Math.acos(45)][Math.acos(60)][Math.asin(60)][Math.asin(45)][Math.asin(30)][Math.asin(15)]
    [Math.acos(15)][Math.acos(30)][Math.acos(45)][Math.acos(60)][Math.asin(60)][Math.asin(45)][Math.asin(30)][Math.asin(15)]
    ]
export const matrix9:number[][]=[
     [25][51200][3200] [16][200][972] [194400][18895680][675]
     [100][5][20]       [4][20] [54]   [1080][45][48600]
    [100][20][5]        [4][10] [18]   [15][270][4050]
       [4][2][2]        [1] [2] [3 ]   [6][18 ][108]
   [1600][80][20]       [4] [5] [6 ]  [30][180][540]
  [1792][392][56]       [7] [8] [9 ]  [72][648][46656]
[34300][980][35]        [28] [40] [54]  [45][2430][19600]
[17287200][245][70560] [196] [360][486]  [174960][405][70858800]
[8575][43370127360][7902720] [5488][1440][26244]  [37791360][991796451840][18225]
]
console.log(Matrix5,Matrix6,Matrix7,'Matrix8','Matrix9')
void  function tennetMatrix(){
    [`matrix0`][`A`][`B`][`C`][`D`] [`d`][`c`][`b`][`a`][`matrix9`]
    [`H`][`matrix1`][`G`][`F`][`E`] [`e`][`f`][`g`][`matrix8`][`h`]
    [`L`][`K`]['matrix2'][`J`][`I`] [`i`][`j`][`matrix7`][`k`][`l`]
    [`P`][`O`][`N`][`matrix3`][`M`] [`m`][`matrix6`][`n`][`o`][`p`]
    [`T`][`S`][`R`][`Q`][`matrix4`] [`matrix5`][`q`][`r`][`s`][`t`]

    [`w1`][`v`][`u`][`t5`] [`matrix4`]   [`matrix5`][`t10`][`u`][`v`][`w2`]
    [`t4`][`t3`][`t2`][`matrix3`][`t1`] ['t6']['matrix6']['t7']['t8']['t9']
    [`T3`]['Z3']['matrix2'][`Y3`][`X3`] [`X6`][`Y6`]['matrix7'][`Z6`][`T6`]
    [`T2`][`matrix1`][`Z2`][`Y2`][`X2`] [`X5`][`Y5`][`Z5`]['matrix8'][`T5`]
    [`matrix0`][`T1`][`Z1`][`Y1`][`X1`] [`X4`][`Y4`][`Z4`][`T4`][`matrix9`]
}