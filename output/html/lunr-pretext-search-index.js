var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "subsection-1",
  "level": "1",
  "url": "subsection-1.html",
  "type": "Subsection",
  "number": "1.1",
  "title": "Applications of Linear Algebra",
  "body": " Applications of Linear Algebra  Linear algebra has a wide range of applications. The applications of linear algebra increase over time as computing power increases. Some applications of linear algebra include:  Applications to engineering, physics, biology, economics, and statistics.  Computer science, including computer graphics.  Applications to data science and machine learning.  Oil exploration, ships searching for offshore oil deposits solve thousands of systems of linear equations every day. The seismic data for the equations are obtained from underwater shock waves created by explosions from air guns.  Linear programming, airlines scheduling flight crews, monitoring the location of aircraft.  Network flow (e.g. the internet, electrical networks, traffic flow, etc.), relies on linear algebra and linear systems of equations. Google's PageRank, ranking websites.  Chemistry, the geometry of molecules such as methane, balancing chemical equations as a system of equations.  Psychology, factor analysis.  pg. 1 Leontief economic analysis, ch.1.6 and 2.6, applications of linear algebra (in particular, systems of linear equations).  Robotics.  Applications to cryptography, using matrices.    Linear algebra also provides the foundations for other advanced topics in mathematics, including:  Multi-variable calculus and vector calculus.  Differential equations (including partial differential equations).  Abstract algebra (a generalization of linear algebra).  Mathematical game theory.    "
},
{
  "id": "section-SOLE",
  "level": "1",
  "url": "section-SOLE.html",
  "type": "Section",
  "number": "2.1",
  "title": "Systems of Linear Equations",
  "body": " Systems of Linear Equations   In high-school algebra, we consider systems of two linear equations in two unknowns. For example, These systems can be solved graphically, using substitution, or using elimination.   Solving systems of linear equations is the foundational problem of linear algebra.   In linear algebra, we develop more advanced and general techniques to solve larger systems of equations.    Motivation: Systems of Two Linear Equations In Two Variables  A system of two linear equations in two variables is of the form,   Graphically, these two linear equations represent lines in the plane, say denoted by and , respectively. Then, an ordered pair is a solution to the system if it satisfies both equations in the system. Graphically, this means that the point lies on both lines and , i.e. is a point of intersection.  To solve a system is to determine all of its soltions. The set of all solutions of a system is called its solution set .  In general, there are 3 cases for the intersection of two lines in the plane:  The lines can intersect at a single point.  The lines can be parallel to each other, and so never intersect.  The lines can coincide (overlap each other), and so intersect at infinitely many points.    Graphing both lines to solve the system is sometimes called the row picture , because it considers each equation (each row ) of the system. This is in contrast to the column picture, which will be considered later on.  In the language of solutions of linear systems, these correspond to the possibilities of the system having,  Exactly one solution.  No solution.  Infinitely many solutions.    A system of linear equations is consistent if it has at least one solution. Otherwise, it is inconsistent , i.e. if it has no solution.    Introduction to Systems of Linear Equations  Recall that in algebra, the degree of a term is the sum of the powers of the variables it contains. For example, has degree 2, has degree 3, and has degree 1. A linear equation, broadly, is an equation where every term has degree at most 1. Here, we define a general linear equation in variables.   A linear equation in the variables is an equation which can be written in the form, where are called the coefficients of the equation.   Most considered examples will contain somewhere from 2-5 variables (i.e. ). However, most modern real-life applications of linear algebra contain hundreds or thousands of variables.  The variables are denoted by rather than etc. in order to conveniently represent a large number of equations. If there are only two or three equations, then , and are sometimes used.   A system of linear equations , broadly, is a collection of one or more linear equations involving the same variables. More precisely, a system of linear equations in variables is of the form, where are the coefficients of the system.   Here, the coefficients are written using double subscript notation. Here, represents the coefficients of in the th equation. The first subscript represents the equation number, and the second represents the variable number that it is a coefficient of.    A system of linear equations is also sometimes called simultaneous linear equations , or simply a linear system , or sometimes simply a system .  The variables are sometimes called unknowns .  A solution of a linear system is an ordered tuple which, when substituted for , respectively, makes each equation a true statement.  The set of all possible solutions of a linear system is called its solution set .     "
},
{
  "id": "p-12",
  "level": "2",
  "url": "section-SOLE.html#p-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solve solution set "
},
{
  "id": "p-14",
  "level": "2",
  "url": "section-SOLE.html#p-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row picture "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "section-SOLE.html#definition-1",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "A system of linear equations is consistent if it has at least one solution. Otherwise, it is inconsistent , i.e. if it has no solution. "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "section-SOLE.html#definition-2",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": " A linear equation in the variables is an equation which can be written in the form, where are called the coefficients of the equation.  "
},
{
  "id": "note-1",
  "level": "2",
  "url": "section-SOLE.html#note-1",
  "type": "Note",
  "number": "2.1.3",
  "title": "",
  "body": "The variables are denoted by rather than etc. in order to conveniently represent a large number of equations. If there are only two or three equations, then , and are sometimes used. "
},
{
  "id": "definition-3",
  "level": "2",
  "url": "section-SOLE.html#definition-3",
  "type": "Definition",
  "number": "2.1.4",
  "title": "",
  "body": " A system of linear equations , broadly, is a collection of one or more linear equations involving the same variables. More precisely, a system of linear equations in variables is of the form, where are the coefficients of the system.  "
},
{
  "id": "p-21",
  "level": "2",
  "url": "section-SOLE.html#p-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simultaneous linear equations linear system system unknowns solution solution set "
},
{
  "id": "section-ITSSGE",
  "level": "1",
  "url": "section-ITSSGE.html",
  "type": "Section",
  "number": "2.2",
  "title": "Intro to Solving Systems, Gaussian Elimination",
  "body": " Intro to Solving Systems, Gaussian Elimination   Existence and Uniqueness  When solving a system, we have two main questions:   Existence . Does the system have at least one solution?   Uniqueness . If the system has a solution, is it unique? Or, is there more than one solution?      Triangular Systems, Back-Substitution  Some systems are particularly simple to solve.  Consider the system, Notice that the last equation has only one variable, and so can be solved to determine the value of . In this case, implies that . In other words, if is a solution to this system, it must have in order to satisfy the 3rd equation. Then, we can work backwards and determine the remaining values. First, this value of can be used to solve for in the second equation. If , then , and solving for gives . Finally, the values of and can be used to solve for , using the first equation. If and , then , and solving for gives . Thus, this system has a single unique solution, .  Systems with this staircase form are called triangular . More precisely,  A linear system is triangular if the last equation has at most 1 variable, the 2nd-last has at most 2 variables, the 3rd-last has at most 3 variables, etc.  Triangular systems can be solved using this simple technique, called back-substitution . This technique can be used for any triangular system to solve for the value of each variable.    Gaussian Elimination, Elementary Operations   Gaussian elimination is a procedure, or algorithm, to transform a system of linear equations to triangular form, making it much easier to solve. Broadly, it involves combining equations of a system in various ways. Each step replaces the current system with another somewhat simpler system, without changing the solution set.   Two linear systems are called equivalent if they share the same solution set. That is, every solution of the first system is a solution of the second system, and vise versa.   In other words, the simpler system is equivalent to the original system, in that the simpler system has the same solution set as the original system. After the system is converted into triangular form, solving this resulting system gives the solution to the original system.   Elementary operations Denote equation by . Then, the elementary operations are,   Interchange . Interchange the order of two equations in the system, .   Scaling . Multiply (or divide) an equation by a non-zero real number, .   Replacement . Add to one equation a multiple of another equation, .    The fact that these elementary operations do not change the solution set of the system is crucial, and it somewhat subtle, and will be explained after an example.  Consider the system, We want to convert this system into triangular form, from which it will be easy to solve. To do this, we need to eliminate the variables below the main diagonal, i.e. eliminate from the 2nd and 3rd equation and from the 3rd equation. To do this, first, add times the 1st equation to the 2nd equation, and add the 1st equation to the 3rd equation. This results in the equivalent system, Notice that this involved choosing appropriate multiples of the 1st equation to add to the other equations. Next, we use the 2nd equation to eliminate in the 3rd equation, by adding 3 times the 2nd equation to the 3rd equation. This is results in the system, This system is in triangular form, so we can use back substitution. Solving for , we get . Then, solving for gives , and finally .    Remark on Elementary Operations  A crucial property of elementary operations is that applying them does not change the solution set of the system. More precisely, if an elementary operation transforms system 1 into system 2, then system 1 and system 2 have the same solution set.   First, interchanging two equations , i.e. rearranging the order of the equations, clearly does not affect the solutions of those two equations, and so doesn't affect the solution set of the system.  Also, multiplying an equation by a non-zero constant does not change the solutions of that equation, as any solution of is also a solution of , and vise versa. This is true as long as , as if , then is just the equation for which any tuple will be a solution.  Finally, consider adding a multiple of an equation to another equation, . Let be a solution to the original system. Then, it is a solution of and . From before, it is also a solution to . This implies that is a solution to the sum .  Then, it follows that any sequence of these operations will not change the solution set of the system.   Solving Systems of Two Equations in Two Variables  Consider a system of two equations in two unknowns, Here, we have relabelled variables for simplicity. The variables here are and , and the coefficients are . Using elimination, we can solve this system. For example, to eliminate in the second equation, subtract times the first equation to times the second equation. The resulting equation is, Then, we can solve for by dividing both sides by , This is the unique solution for , provided that . Similarly, starting from the original system, We can eliminate in the second equation by subtracting times the first equation from times the second equation. The resulting equation is, Then, similarly, solving for , Again, provided that . For simplicity, we will denote (this will be revisited later). Then, if , the unique solution is, Note that this unique solution only exists if . If , then there may be infinitely many solutions, or no solution.   "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-ITSSGE.html#example-1",
  "type": "Example",
  "number": "2.2.1",
  "title": "",
  "body": "Consider the system, Notice that the last equation has only one variable, and so can be solved to determine the value of . In this case, implies that . In other words, if is a solution to this system, it must have in order to satisfy the 3rd equation. Then, we can work backwards and determine the remaining values. First, this value of can be used to solve for in the second equation. If , then , and solving for gives . Finally, the values of and can be used to solve for , using the first equation. If and , then , and solving for gives . Thus, this system has a single unique solution, . "
},
{
  "id": "definition-4",
  "level": "2",
  "url": "section-ITSSGE.html#definition-4",
  "type": "Definition",
  "number": "2.2.2",
  "title": "",
  "body": "A linear system is triangular if the last equation has at most 1 variable, the 2nd-last has at most 2 variables, the 3rd-last has at most 3 variables, etc. "
},
{
  "id": "p-25",
  "level": "2",
  "url": "section-ITSSGE.html#p-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "back-substitution "
},
{
  "id": "p-26",
  "level": "2",
  "url": "section-ITSSGE.html#p-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gaussian elimination "
},
{
  "id": "definition-5",
  "level": "2",
  "url": "section-ITSSGE.html#definition-5",
  "type": "Definition",
  "number": "2.2.3",
  "title": "",
  "body": " Two linear systems are called equivalent if they share the same solution set. That is, every solution of the first system is a solution of the second system, and vise versa.  "
},
{
  "id": "definition-6",
  "level": "2",
  "url": "section-ITSSGE.html#definition-6",
  "type": "Definition",
  "number": "2.2.4",
  "title": "Elementary operations.",
  "body": " Elementary operations Denote equation by . Then, the elementary operations are,   Interchange . Interchange the order of two equations in the system, .   Scaling . Multiply (or divide) an equation by a non-zero real number, .   Replacement . Add to one equation a multiple of another equation, .   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "section-ITSSGE.html#example-2",
  "type": "Example",
  "number": "2.2.5",
  "title": "",
  "body": "Consider the system, We want to convert this system into triangular form, from which it will be easy to solve. To do this, we need to eliminate the variables below the main diagonal, i.e. eliminate from the 2nd and 3rd equation and from the 3rd equation. To do this, first, add times the 1st equation to the 2nd equation, and add the 1st equation to the 3rd equation. This results in the equivalent system, Notice that this involved choosing appropriate multiples of the 1st equation to add to the other equations. Next, we use the 2nd equation to eliminate in the 3rd equation, by adding 3 times the 2nd equation to the 3rd equation. This is results in the system, This system is in triangular form, so we can use back substitution. Solving for , we get . Then, solving for gives , and finally . "
},
{
  "id": "section-ITMAMOAS",
  "level": "1",
  "url": "section-ITMAMOAS.html",
  "type": "Section",
  "number": "2.3",
  "title": "Introduction to Matrices, Augmented Matrix of a System",
  "body": " Introduction to Matrices, Augmented Matrix of a System  Notice that a system of linear equations can be essentially represented by its coefficients. Given a system, it can be represented fully by the following array of coefficients, This array captures the essential information of the system. That is, the variables in the original system simply act as placeholders . As long as we keep track of which columns correspond to which variables, the array contains precisely the same information about the system as its equation form . Systems of linear equations can be conveniently and efficiently represented in this way. This kind of rectangular array of numbers is called a matrix .   Matrices  Broadly, a matrix is a rectangular array of numbers, arranged in (horizontal) rows and (vertical) columns, and within brackets.   Let . Then, an  matrix (read as by matrix ) is a rectangular array of rows and columns of real numbers,   Each number is called an entry (or coefficient , or element ) of the matrix. Then, represents the entry in row and column .   The plural of matrix is matrices  Matrices are typically denoted by capital letters, like , etc.    Note that in , the number of rows is specified first, then the number of columns.  A matrix is square if it has the same number of rows as columns. In other words, is an matrix, for some .  Examples will often include or matrices. A general matrix is of the form,   The latter notation is simpler because it doesn't involve subscripts. However, if there are multiple matrices involved, the former notation can be more practical.    Augmented Matrix of a System  Consider the linear system,  Recall that a linear system is, in some sense, completely determined by its coefficients. Here, this system is completely determined by the matrix which contains the coefficients of the variables, and the matrix containing the coefficients on the right-hand sides, More simply, it can be represented by a single matrix, containing all of the coefficients, This is called the augmented matrix of the system. Notice that the variables are simply placeholders which align and separate the coefficients. Often, augmented matrices are written with a vertical bar separating the coefficients of the variables, and the column containing the constant coefficients,  The coefficient matrix of a linear system is the matrix with entries given by the coefficients of the variables. The augmented matrix is the coefficient matrix with an additional column for the constant terms. The system, has coefficient matrix and augmented matrix,   Quite literally, the augmented matrix results from augmenting the constant terms onto the coefficient matrix.   "
},
{
  "id": "definition-7",
  "level": "2",
  "url": "section-ITMAMOAS.html#definition-7",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": " Let . Then, an  matrix (read as by matrix ) is a rectangular array of rows and columns of real numbers,   Each number is called an entry (or coefficient , or element ) of the matrix. Then, represents the entry in row and column .   The plural of matrix is matrices  Matrices are typically denoted by capital letters, like , etc.   "
},
{
  "id": "definition-8",
  "level": "2",
  "url": "section-ITMAMOAS.html#definition-8",
  "type": "Definition",
  "number": "2.3.2",
  "title": "",
  "body": "A matrix is square if it has the same number of rows as columns. In other words, is an matrix, for some . "
},
{
  "id": "definition-9",
  "level": "2",
  "url": "section-ITMAMOAS.html#definition-9",
  "type": "Definition",
  "number": "2.3.3",
  "title": "",
  "body": "The coefficient matrix of a linear system is the matrix with entries given by the coefficients of the variables. The augmented matrix is the coefficient matrix with an additional column for the constant terms. The system, has coefficient matrix and augmented matrix,  "
},
{
  "id": "section-GEAM",
  "level": "1",
  "url": "section-GEAM.html",
  "type": "Section",
  "number": "2.4",
  "title": "Gaussian Elimination and Matrices",
  "body": " Gaussian Elimination and Matrices  Then, Gaussian elimination can be reframed in terms of modifying rows of the augmented matrix of a system.   Elementary Row Operations   Elementary Row Operation   Interchange . Interchange two rows in the matrix.  Scaling . Multiply (or divide) an equation by a non-zero real number.  Replacement . Add to one equation a multiple of another equation.   These row operations are denoted symbolically by,   , interchanging row and row .      Performing Gaussian elimination with this matrix form removes the need of repeatedly writing the variables. This process on a matrix is also called row reduction .   Two matrices are row equivalent if one can be obtained from the other by a (finite) sequence of row oeprations.  A zero row has only zeros. A non-zero row is a row with at least one non-zero entry.  The leading entry of a non-zero row is the left-most non-zero entry. It is also called the leading coefficient , or pivot .     Row Echelon Form  After Gaussian elimination is performed on a matrix, the staircase or triangular form of the matrix is called row echelon form.  A matrix is in row echelon form (or simply echelon form , or REF ) if,  Any zero rows are the bottom of the matrix.  the leading entry of every non-zero row is always strictly to the right of any leading entry above it.    Matrices in row echelon form have the broad form,  where the pivots are non-zero numbers. Notice that,  Every entry below a pivot is 0.  The leading entries are staggered to the right as we go down.  All zero rows are at the bottom.   The terminology echelon is due to the step-like pattern of the non-zero entries of the matrix. The process of transforming a matrix into row echelon form is called row reduction . In summary,   A pivot position in a matrix is a location which corresponds to a leading entry in the row echelon form of . A pivot column is a column of which contains a pivot position.    Summary of Row Reduction  Consider a matrix . Broadly, row reduction involves going column by column, reducing the matrix to a simpler matrix at each step.   First, determine the left-most non-zero column, which will be the first pivot column . In this column, choose a non-zero entry to be the pivot entry . If necessary, use a row exchange to positive the pivot at the top of the column. In terms of completing the algorithm, it doesn't matter which non-zero entry we select to be the pivot. For hand-computation, it is typically easier to select a 1 if that is available, as that will make the computations a bit more simple.  Use row replacement operations to create zeros in all positions below the pivot. That is, add multiples of the top row to rows below it as to remove all entries below the pivot entry.   Repeat the previous steps with the remaining submatrix below and to the right of the pivot, (In this way, row reduction is a recursive algorithm, as row reduction of a matrix depends on performing row reduction on some smaller matrix). Repeat this step until there are no more non-zero rows to modify.   Finally, to convert the matrix to RREF,   Starting with the right-most pivot, use replacement row operations to create zeros above each pivot. If a pivot is not 1, make it 1 using a scaling operation.   Steps 1-3 to convert a matrix to REF is called the forward phase of Gaussian elimination. Step 4 to convert it to the unique RREF is called the backwards phase .    Remark on Gaussian Elimination  Gaussian elimination, despite its simplicity, is one of the most important algorithms in linear algebra. Notice that Gaussian elimination is not really much more than high school algebra, but done in a systematic way.    Systems with Infinitely Many Solutions  If the REF of the augmented matrix of a system has a zero row, then the system has infinitely many solutions.   Consider the matrix in REF,  which is the augmented matrix of the linear system, At this point, notice that the third equation is the true statement (or tautology) . Intuitively, this means that while there were originally 3 equations that constrained the possible solutions, one of those equations were superfluous. Then, any solution only has to satisfy the remaining two equations. In short, there are 3 variables, but only 2 constraints. In this case, for example, if we choose an arbitrary value of , say , then we can solve for and in equation 1 and 2, respectively, and get a solution of the system. In particular, Then, any tuple of the form (where is any number) will be a solution to the system. In particular, there are infinitely many solutions of the system. Here, is called a free variable , because it can take on any value to generate a solution of the system.  Variables which correspond to pivot columns are called basic variables . The other variables are called free variables .  In general, for the augmented matrix of a system in REF, any non-pivot column corresponds to a free variable (besides the right-most constant column). Free variables can take on any value, and then we can solve for the basic variables in terms of the free variables.    Systems with No Solution  If the REF of the augmented matrix of a system has a row which corresponds to a false statement, then the system has no solution.  Consider the matrix in REF, which corresponds to the linear system, The 3rd equation is the false statement (or, contradiction ) , so the system has no solution. This is because, no matter what the values of , it is not possible for the third equation to be satisfied. A solution of the system must make every equation true, so no such solution exists. Thus, the system is inconsistent.    Reduced Row Echelon Form  The row ecehlon form of a matrix is not unique, in that, by doing different sequences of row operations, the final row echelon forms can be different. However, we can continue to apply row operations in order to simplify the matrix further into reduced row ecehlon form.  A matrix is in reduced row echelon form ( RREF ) if,  The matrix is in REF.  Every pivot is 1.  Every pivot is the only non-zero entry in its column.    In short, RREF goes further than REF by requiring that every pivot is 1 (rather than just any number), and that there are all 0's below and above each pivot.   A classic example of a matrix in RREF is a matrix of the form,   This represents a system of 3 linear equations in 3 unknowns. In particular the system,  In other words,  from which the unique solution can be read right off as .   Basically, RREF builds in the back substitution into the row reduction procedure.  Consider the system, which has augmented matrix, After reducing to REF, one possible form is, We could perform back substitution as before, but we can also instead convert to RREF. Doing so gives, from which the unique solution can be read right off.   Uniqueness of RREF  Every matix is row equivalent to a unique matrix in RREF.    EXERCISE .  The process of converting a matrix into RREF is sometimes called Gauss-Jordan elimination , due to Gauss and also Wilhelm Jordan.    Existence and Uniqueness, Summary   A linear system is consistent if and only if the right-most column of its augmented matrix is not a pivot column. In other words, if and only if the REF of the augmented matrix has no row of the form,   If a linear system in consistent, then the solution set is either:   A unique solution, if there are no free variables.  Infinitely many solutions, if there are at least one free variable.      Summary of Solving Systems with Gaussian Elimination   Determine the augmented matrix of the system .  Convert the matrix into an equivalent matrix in REF, using row reduction. If the system is inconsistent, then we are done.  If the system is consistent, then convert the matrix into RREF.  Write the system of equations corresponding to the matrix in RREF.  Solve for each basic variable in terms of any free variables.     Historical Note  Gaussian elimination is named after German mathematician Carl Friedrich Gauss (1777-1855), who developed the method in his work and helped develop the formal theory of matrices. German engineer Wilhelm Jordan (1842-1899) helped popularize the method.  However, similar methods of elimination were developed as early as around 250-100 BC by the ancient Chinese, during the Han dynasty. The method is included in the book The Nine Chapters on the Mathematical Art (Jiuzhang suanshu), one of the earliest surviving mathematical texts from China. The ancient chinese also had a device called a counting board, which contained the array of coefficients, and allowed for calculations similar to that with matrices.    Number of Operations for Row Reduction (Flops)   Consider the number of operations required to perform row reduction. Let be an matrix. To consider the worst case, we will assume that has all non-zero entries (if the matrix has some zero entries, this reduces the computations required).  The first step of elimination requires making zeros in the first column, through row replacement operations. Each row replacement operation ( ) basically involves a single multiplication (of times an entry in ) and a single addition ( ). For simplicity, we will assume that each operation (addition, subtraction, multiplication, division) all take roughly the same amount of time.  We call a single one of these operations a flop (short for floating point operation ). Traditionally, flop referred only to a multiplication or division, because these operations took somewhat more time and the more simple operations of addition and subtraction, and so the latter could be ignored, relatively speaking. With modern technology, all operations take about the same time.  Then, modifying a single entry with a replacement row operation requires 2 flops. Then, the first step in row reduction requires modifying rows of the matrix (every row except the pivot row), and each of these rows has entries. So, the first step requires flops.  The second step involves a submatrix of size . Here, row reduction involves rows, each with entries, for a total for flops.  Continuing in this way, the subsequent steps require steps. The final step, acting on a submatrix, requries flops. Thus, the total number of flops is,   In summation notation, this can be written as (in increasing order),   This sum can be evaluated to find an explicit formula,   Then, we can apply the summation formulas,   Here, the upper limit of the summation is rather than , so we substitute for when applying the formulas,   Then, simplifying,   Then, consider the asymptotic behavior. When is large,   In particular, about operations.  Next, consider back substitution. Here, the first step requires making a 0 everywhere above the bottom-right entry in the th column. There are entries, and again each uses a single row replacement, which is made up of 2 flops. So, flops. The next step involves entries, and so has flops. Continuing in this way, the last step involving changing the single entry about the pivot in the column, for flops. Then, in total, the number of flops is,   As becomes large, this is approximately flops.     Computing Note  A computer program performing row reduction with floating point numbers has to minimize rounding error when performing numerical operations. For this reason, they will typically choose pivot rows using not only by the necessary condition that the pivot entry is non-zero, but additionally it will choose the largest entry in the column, in absolute value. In other words, they will avoid using pivots which are close to 0.    In Python, implement a Gaussian elimination algorithm, to be used on a matrix formed by a 2D array.  In Python, extend the Gaussian elimination algorithm to perform Gauss-Jordan elimination.   "
},
{
  "id": "definition-10",
  "level": "2",
  "url": "section-GEAM.html#definition-10",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Elementary Row Operation.",
  "body": " Elementary Row Operation   Interchange . Interchange two rows in the matrix.  Scaling . Multiply (or divide) an equation by a non-zero real number.  Replacement . Add to one equation a multiple of another equation.   These row operations are denoted symbolically by,   , interchanging row and row .     "
},
{
  "id": "p-41",
  "level": "2",
  "url": "section-GEAM.html#p-41",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row reduction "
},
{
  "id": "definition-11",
  "level": "2",
  "url": "section-GEAM.html#definition-11",
  "type": "Definition",
  "number": "2.4.2",
  "title": "",
  "body": "A matrix is in row echelon form (or simply echelon form , or REF ) if,  Any zero rows are the bottom of the matrix.  the leading entry of every non-zero row is always strictly to the right of any leading entry above it.   "
},
{
  "id": "p-44",
  "level": "2",
  "url": "section-GEAM.html#p-44",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row reduction "
},
{
  "id": "definition-12",
  "level": "2",
  "url": "section-GEAM.html#definition-12",
  "type": "Definition",
  "number": "2.4.3",
  "title": "",
  "body": "A pivot position in a matrix is a location which corresponds to a leading entry in the row echelon form of . A pivot column is a column of which contains a pivot position. "
},
{
  "id": "p-47",
  "level": "2",
  "url": "section-GEAM.html#p-47",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "forward phase backwards phase "
},
{
  "id": "example-3",
  "level": "2",
  "url": "section-GEAM.html#example-3",
  "type": "Example",
  "number": "2.4.4",
  "title": "",
  "body": " Consider the matrix in REF,  which is the augmented matrix of the linear system, At this point, notice that the third equation is the true statement (or tautology) . Intuitively, this means that while there were originally 3 equations that constrained the possible solutions, one of those equations were superfluous. Then, any solution only has to satisfy the remaining two equations. In short, there are 3 variables, but only 2 constraints. In this case, for example, if we choose an arbitrary value of , say , then we can solve for and in equation 1 and 2, respectively, and get a solution of the system. In particular, Then, any tuple of the form (where is any number) will be a solution to the system. In particular, there are infinitely many solutions of the system. Here, is called a free variable , because it can take on any value to generate a solution of the system. "
},
{
  "id": "definition-13",
  "level": "2",
  "url": "section-GEAM.html#definition-13",
  "type": "Definition",
  "number": "2.4.5",
  "title": "",
  "body": "Variables which correspond to pivot columns are called basic variables . The other variables are called free variables . "
},
{
  "id": "example-4",
  "level": "2",
  "url": "section-GEAM.html#example-4",
  "type": "Example",
  "number": "2.4.6",
  "title": "",
  "body": "Consider the matrix in REF, which corresponds to the linear system, The 3rd equation is the false statement (or, contradiction ) , so the system has no solution. This is because, no matter what the values of , it is not possible for the third equation to be satisfied. A solution of the system must make every equation true, so no such solution exists. Thus, the system is inconsistent. "
},
{
  "id": "definition-14",
  "level": "2",
  "url": "section-GEAM.html#definition-14",
  "type": "Definition",
  "number": "2.4.7",
  "title": "",
  "body": "A matrix is in reduced row echelon form ( RREF ) if,  The matrix is in REF.  Every pivot is 1.  Every pivot is the only non-zero entry in its column.   "
},
{
  "id": "example-5",
  "level": "2",
  "url": "section-GEAM.html#example-5",
  "type": "Example",
  "number": "2.4.8",
  "title": "",
  "body": " A classic example of a matrix in RREF is a matrix of the form,   This represents a system of 3 linear equations in 3 unknowns. In particular the system,  In other words,  from which the unique solution can be read right off as .  "
},
{
  "id": "example-6",
  "level": "2",
  "url": "section-GEAM.html#example-6",
  "type": "Example",
  "number": "2.4.9",
  "title": "",
  "body": "Consider the system, which has augmented matrix, After reducing to REF, one possible form is, We could perform back substitution as before, but we can also instead convert to RREF. Doing so gives, from which the unique solution can be read right off. "
},
{
  "id": "theorem-1",
  "level": "2",
  "url": "section-GEAM.html#theorem-1",
  "type": "Theorem",
  "number": "2.4.10",
  "title": "Uniqueness of RREF.",
  "body": " Uniqueness of RREF  Every matix is row equivalent to a unique matrix in RREF.  "
},
{
  "id": "proof-1",
  "level": "2",
  "url": "section-GEAM.html#proof-1",
  "type": "Proof",
  "number": "2.4.7.1",
  "title": "",
  "body": " EXERCISE . "
},
{
  "id": "p-60",
  "level": "2",
  "url": "section-GEAM.html#p-60",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gauss-Jordan elimination "
},
{
  "id": "theorem-2",
  "level": "2",
  "url": "section-GEAM.html#theorem-2",
  "type": "Theorem",
  "number": "2.4.11",
  "title": "",
  "body": " A linear system is consistent if and only if the right-most column of its augmented matrix is not a pivot column. In other words, if and only if the REF of the augmented matrix has no row of the form,   If a linear system in consistent, then the solution set is either:   A unique solution, if there are no free variables.  Infinitely many solutions, if there are at least one free variable.   "
},
{
  "id": "p-63",
  "level": "2",
  "url": "section-GEAM.html#p-63",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Carl Friedrich Gauss Wilhelm Jordan "
},
{
  "id": "example-7",
  "level": "2",
  "url": "section-GEAM.html#example-7",
  "type": "Example",
  "number": "2.4.12",
  "title": "",
  "body": " Consider the number of operations required to perform row reduction. Let be an matrix. To consider the worst case, we will assume that has all non-zero entries (if the matrix has some zero entries, this reduces the computations required).  The first step of elimination requires making zeros in the first column, through row replacement operations. Each row replacement operation ( ) basically involves a single multiplication (of times an entry in ) and a single addition ( ). For simplicity, we will assume that each operation (addition, subtraction, multiplication, division) all take roughly the same amount of time.  We call a single one of these operations a flop (short for floating point operation ). Traditionally, flop referred only to a multiplication or division, because these operations took somewhat more time and the more simple operations of addition and subtraction, and so the latter could be ignored, relatively speaking. With modern technology, all operations take about the same time.  Then, modifying a single entry with a replacement row operation requires 2 flops. Then, the first step in row reduction requires modifying rows of the matrix (every row except the pivot row), and each of these rows has entries. So, the first step requires flops.  The second step involves a submatrix of size . Here, row reduction involves rows, each with entries, for a total for flops.  Continuing in this way, the subsequent steps require steps. The final step, acting on a submatrix, requries flops. Thus, the total number of flops is,   In summation notation, this can be written as (in increasing order),   This sum can be evaluated to find an explicit formula,   Then, we can apply the summation formulas,   Here, the upper limit of the summation is rather than , so we substitute for when applying the formulas,   Then, simplifying,   Then, consider the asymptotic behavior. When is large,   In particular, about operations.  Next, consider back substitution. Here, the first step requires making a 0 everywhere above the bottom-right entry in the th column. There are entries, and again each uses a single row replacement, which is made up of 2 flops. So, flops. The next step involves entries, and so has flops. Continuing in this way, the last step involving changing the single entry about the pivot in the column, for flops. Then, in total, the number of flops is,   As becomes large, this is approximately flops.  "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-GEAM.html#exercise-1",
  "type": "Exercise",
  "number": "2.4.13.1",
  "title": "",
  "body": "In Python, implement a Gaussian elimination algorithm, to be used on a matrix formed by a 2D array. "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-GEAM.html#exercise-2",
  "type": "Exercise",
  "number": "2.4.13.2",
  "title": "",
  "body": "In Python, extend the Gaussian elimination algorithm to perform Gauss-Jordan elimination. "
},
{
  "id": "section-ITV",
  "level": "1",
  "url": "section-ITV.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction to Vectors",
  "body": " Introduction to Vectors  Previously, we considered linear systems as strictly from the perspective of relationships between variables. Next, we will consider it from the perspective of vectors . Vectors are at the heart of linear algebra.   Vectors  The term vector is used widely in mathematics, physics, and computer science. There are a variety of definitions, ranging from specific and applied to mathematically abstract. For now, a vector will simply mean an ordered list of real numbers. In linear algebra, we represent vectors most commonly as a column matrix , a matrix with dimensions , i.e. a matrix with 1 row and  columns . Similarly, a row vector is a matrix, a matrix which has 1 columns and  rows .    Vectors in  First, we will consider vectors that contain two numbers, of the form,   The physics perspective on vectors views them as directed line segments. That is, line segments with a direction, typically represented by an arrow. The point where the vector arrow starts is called its tail (or initial point ), and the point where it ends the head (or terminal point ).  With this perspective, vectors don't change if they are moved around in the plane, that is, they are unaffected by translation. This geometric perspective isn't very computational. To bridge this difference, we make the convention of viewing vectors with their tails fixed at the origin .  A vector is in standard position if its initial point is at the origin.  The advantage to this convention is that a vector in standard position is completely determined by its terminal point. In particular, if the terminal point of a vector is , then this ordered pair can be used to specific the vector.  The vector from the origin to a point is called a position vector for the point .  Further, every point in the plane can be represented by the orederd list of numbers, .  In this way, there is a one-to-one correspondence between geometric vectors, ordered pairs, and vectors. We identify a column vector with an ordered tuple of numbers. That is, we treat them as equivalent. For example,   This correspondence allows us to write vectors horizontally, which is sometimes convenient because it takes up less space. On the other hand, for technical reasons, it will be necessary to keep the vertical convention.  The numbers contained in a vectors are called its entries , or components , or sometimes its coordinates .  The set of all vectors with two entries is denoted by (read r-squared or simply r-two ). Again, this can be thought of as the set of all two-dimensional vectors (geometrically), the set of all ordered pairs , or the set of all column matrices of the form .   Two vectors in are equal if their corresponding entries are equal.   Next, we define the fundamental operations for combining vectors: addition and scalar multiplication.   Addition of vectors  Let be vectors in . Their sum  is the vector obtained by adding the corresponding entries of and . That is, for ,    Geometrically, the sum is obtained by aligning the tail of with the head of . Then, the vector is the arrow from the tail of to the head of . This is called the parallelogram rule for addition , or the tail-to-tip method .  Alternatively, if the tails of and are aligned together, and we form the parallelogram with sides and , then is the vector formed by an arrow from their tails to the opposite vertex of the paralellogram.  Intuitively, if the vectors are thought of as representing motion, then is the resulting motion after movement corresponding to and then .   Scalar multiplication of vectors  Let be a vector, . Then, the scalar multiple of by , , is the vector obtained by multiply each entry of by .   The number is called a scalar . This is because, literally, multiplying a vector by a number scales the length of the vector. Geometrically, if , then is the vector with the same direction as , but scaled to be times as long. If , then has the opposite direction as , and is also times as long as .  In fact, this is just an extension of addition of real numbers, represented on a number line. This is because real numbers can be thought of as 1-dimensional vectors .  We can also define vector subtraction in the natural way,   However, is just , that is, the sum of and the scalar multiple . In other words, subtraction is not really a fundamental operation, because it is defined in terms of the other operations addition and scalar multiplication.  For simplicity, the scalar multiple is written as .   The zero vector is the unique vector with no magnitude and no direction, and is denoted by .     Magnitude of a Vector  The physics definition of a vector is a quantity with magnitude and direction. The magnitude of a vector is denoted by , or . The first notation surrounds by absolute value bars, intuitively denoting magnitude.  Geometrically, the magnitude of a vector is the length of its directed line segment in the plane. That is, the distance from initial point to its terminal point. Consider a vector in the plane in standard position, with terminal point . The magnitude of is the distance from the origin to , given by the distance formula in the plane.   Let . The magnitude (or length ) of is defined by,    It follows directly from this definition that for a scalar .    Unit Vectors  A vector is called a unit vector if it has magnitude equal to 1. Given a vector , there is a unit vector which is parallel to , namely,   Also, this vector is unique, because if a vector is a unit vector ( ) and is in the direction of ( for some ), then it follows that is given by the above formula. This is because , but also . Thus, , and so .    The Standard Basis Vectors  In , there are two special vectors, typically denoted by and . They are defined by,   They are called the standard basis vectors in the plane. Then, any vector can be written in terms of a linear combination of these basis vectors,   Intuitively, basis means underlying support or foundation . The standard basis vectors provide a simple foundation from which all vectors can be represented in terms of.    Vectors in  The algebra and geometry of vectors in the plane extends to 3D space. The set of vectors with three entries is denoted by .  Vectors in are column matrices, of the form,   Again, these vectors can be represented geometrically as directed line segments, and as points in space .  Similarly, we define addition and scalar multiplication in an analogous way.   Addition of vectors  Let be vectors in . Their sum  is given by,     Scalar multiplication of vectors  Let be a vector in , . Then, the scalar multiple of by , , is given by,    The magnitude of a vector in is again the distance from the origin to its terminal point .   Let . The magnitude (or length ) of is defined by,    The standard basis vectors in are denoted by , given by,   Similarly, any vector can be represented as a linear combination of these basis vectors, as,     Vectors in  The algebra of vectors can be generalized to vectors with elements, of the form,   Here, for , it is more difficult to consider vectors geomtrically as directed line segments. However, the algebra and mathematics are not lost.  The set of all ordered -tuples of real numbers is denoted by (read as r-n ). Intuitively, this can be thought of as -dimensional space .  Again, we have the convention that,   Note that is not a row vector.  The definitions of equality, sum, and scalar multiple are analogous to that for and ,   Vectors in are equal if all of their corresponding entries are equal.  The sum  is obtained by adding entries componentwise.  The scalar multiple  is obtained by multiplying every entry of by .  The zero vector , denoted by , is the unique vector with entries which are all zeros.  The magnitude of is given by,   In , the standard basis vectors are given by,   Then, every vector in can be written as a linear combination of these basis vectors, as,     Properties of Vector Arithmetic  The arithmetic of vectors satisfies many of the familiar laws of arithmetic with numbers.   Properties of vector arithmetic  Let be vectors, . Then,   Addition commutative , .  Addition associative , .  Additive identity , .  Additive inverse , .  Scalar multiplication associative , .  Scalar multiplication distributes over addition , .  Vectors distribute over addition , .    These properties all essentially follow from the corresponding properties of real numbers.    Linear Combinations of Vectors  The fundamental operations combine to form linear combinations. Consider two vectors . Adding them gives . Multiplying them by (possibly different) scalars gives and . Combining these two operations, we get a linear combination ,    Let be vectors, be scalars. Then, the vector given by,   is called a linear combination of and , with weights  .    Let be vectors, be scalars. Then, the vector given by, is called a linear combination of with weights  .   Given any collection of vectors, the trivial linear combination is that with all weights being 0, i.e.,    "
},
{
  "id": "p-81",
  "level": "2",
  "url": "section-ITV.html#p-81",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "column matrix row vector "
},
{
  "id": "p-83",
  "level": "2",
  "url": "section-ITV.html#p-83",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tail initial point head terminal point "
},
{
  "id": "definition-15",
  "level": "2",
  "url": "section-ITV.html#definition-15",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "A vector is in standard position if its initial point is at the origin. "
},
{
  "id": "definition-16",
  "level": "2",
  "url": "section-ITV.html#definition-16",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "The vector from the origin to a point is called a position vector for the point . "
},
{
  "id": "p-89",
  "level": "2",
  "url": "section-ITV.html#p-89",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "entries components coordinates "
},
{
  "id": "definition-17",
  "level": "2",
  "url": "section-ITV.html#definition-17",
  "type": "Definition",
  "number": "3.1.3",
  "title": "",
  "body": " Two vectors in are equal if their corresponding entries are equal.  "
},
{
  "id": "definition-18",
  "level": "2",
  "url": "section-ITV.html#definition-18",
  "type": "Definition",
  "number": "3.1.4",
  "title": "Addition of vectors.",
  "body": " Addition of vectors  Let be vectors in . Their sum  is the vector obtained by adding the corresponding entries of and . That is, for ,   "
},
{
  "id": "p-94",
  "level": "2",
  "url": "section-ITV.html#p-94",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parallelogram rule for addition tail-to-tip method "
},
{
  "id": "definition-19",
  "level": "2",
  "url": "section-ITV.html#definition-19",
  "type": "Definition",
  "number": "3.1.5",
  "title": "Scalar multiplication of vectors.",
  "body": " Scalar multiplication of vectors  Let be a vector, . Then, the scalar multiple of by , , is the vector obtained by multiply each entry of by .  "
},
{
  "id": "p-98",
  "level": "2",
  "url": "section-ITV.html#p-98",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar "
},
{
  "id": "definition-20",
  "level": "2",
  "url": "section-ITV.html#definition-20",
  "type": "Definition",
  "number": "3.1.6",
  "title": "",
  "body": " The zero vector is the unique vector with no magnitude and no direction, and is denoted by .  "
},
{
  "id": "p-104",
  "level": "2",
  "url": "section-ITV.html#p-104",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "magnitude "
},
{
  "id": "definition-21",
  "level": "2",
  "url": "section-ITV.html#definition-21",
  "type": "Definition",
  "number": "3.1.7",
  "title": "",
  "body": " Let . The magnitude (or length ) of is defined by,   "
},
{
  "id": "p-108",
  "level": "2",
  "url": "section-ITV.html#p-108",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit vector "
},
{
  "id": "p-111",
  "level": "2",
  "url": "section-ITV.html#p-111",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard basis vectors "
},
{
  "id": "definition-22",
  "level": "2",
  "url": "section-ITV.html#definition-22",
  "type": "Definition",
  "number": "3.1.8",
  "title": "Addition of vectors.",
  "body": " Addition of vectors  Let be vectors in . Their sum  is given by,   "
},
{
  "id": "definition-23",
  "level": "2",
  "url": "section-ITV.html#definition-23",
  "type": "Definition",
  "number": "3.1.9",
  "title": "Scalar multiplication of vectors.",
  "body": " Scalar multiplication of vectors  Let be a vector in , . Then, the scalar multiple of by , , is given by,   "
},
{
  "id": "definition-24",
  "level": "2",
  "url": "section-ITV.html#definition-24",
  "type": "Definition",
  "number": "3.1.10",
  "title": "",
  "body": " Let . The magnitude (or length ) of is defined by,   "
},
{
  "id": "theorem-3",
  "level": "2",
  "url": "section-ITV.html#theorem-3",
  "type": "Theorem",
  "number": "3.1.11",
  "title": "Properties of vector arithmetic.",
  "body": " Properties of vector arithmetic  Let be vectors, . Then,   Addition commutative , .  Addition associative , .  Additive identity , .  Additive inverse , .  Scalar multiplication associative , .  Scalar multiplication distributes over addition , .  Vectors distribute over addition , .   "
},
{
  "id": "definition-25",
  "level": "2",
  "url": "section-ITV.html#definition-25",
  "type": "Definition",
  "number": "3.1.12",
  "title": "",
  "body": " Let be vectors, be scalars. Then, the vector given by,   is called a linear combination of and , with weights  .  "
},
{
  "id": "definition-26",
  "level": "2",
  "url": "section-ITV.html#definition-26",
  "type": "Definition",
  "number": "3.1.13",
  "title": "",
  "body": " Let be vectors, be scalars. Then, the vector given by, is called a linear combination of with weights  .  "
},
{
  "id": "example-8",
  "level": "2",
  "url": "section-ITV.html#example-8",
  "type": "Example",
  "number": "3.1.14",
  "title": "",
  "body": "Given any collection of vectors, the trivial linear combination is that with all weights being 0, i.e.,  "
},
{
  "id": "section-VEOL",
  "level": "1",
  "url": "section-VEOL.html",
  "type": "Section",
  "number": "3.2",
  "title": "Vector Equations of Lines",
  "body": " Vector Equations of Lines  Sets of vectors can be used to represent various geometric objects in 2 and 3 dimensions. First, we will consider using vectors to represent lines in , and then in . In , it is simpler to represent lines in Cartesian form, using its slope and -intercept, for example. However, in 3D, lines do not have a slope or -intercept , in the same sense. Then, the vector form will make describing lines in 3D much easier.   Intro to Vector Parametric Form of a Line in the Plane  Recall that in algebra, a line is given by a Cartesian equation , e.g. of the form , where are variables, and are constants ( slope-intercept form ). More precisely, a line is an (infinite) set of points in the plane. In particular, the line could be represented as the set,   That is, the set of all points of the form , where ranges over all real numbers. The number here is called a parameter , because it is a quantity which specifies each point on the line. Here, it happens to represent the -coordinate of the line, but its label does not change the line. That is,   both represent the same set of points, and the same line. We typically represent parameters by . Representing points in the plane as position vectors, this line can be written as the set of all vectors,   We can rewrite this vector in terms of the part which depends on the parameter and that part which doesn't,   Roughly, the -intercept specifies a \"starting point\" for the line, and the slope specifies the \"direction\" the line is in (when moving 1 unit right, we move units up).  Using the language of vectors, we can form a more vector focused form of a line.  Suppose we want a line to pass through the point . This vector will act as a starting point for the line. Then, we specify another vector , which represents the direction from the starting point which we want the line to travel, called a direction vector . Note that a line goes in two opposite directions, so would also work. Then, consider adding some multiple of to . Say, of the form,   where . The resuling vectors, for varying , trace out a line in the plane. As runs from to , the vectors sweep out the entire line. Then, we say that the set,   is the vector parametric form of the line.   Consider a line through the point , in the direction of the non-zero vector . If is a point on the line, then the line has equation,   which is called the vector parametric form . The vector is called a direction vector for the line. In other words, a point is on the line if and only if there exists a number such that .   Note that the direction vector is not unique, because any other vector parallel to it would also specify the same line. Also, the point on the line is not unique, because we could have used any other point on the line.  Another way to think about this, is that is a point on the line if and only if is parallel to , i.e. , which is an equivalent equation.  More explicitly, we can compare components,   Then, by equating components, this results in the equations,   This is called the scalar parametric form of a line . You may have encountered this form if you have studied parametric equations in pre-calculus or calculus.  Another method of specifying a line is to specify two points on the line. This is because a direction vector for the line is the difference between the points, , and one of the points (say ) can be used as the starting point. Thus, the vector parametric form is,   Notice that is on the line, corresponding to , and the point is on the line, corresponding to .    Lines Using Two Points  Recall that a line can also be specified using two points . Then, a direction vector is the vector that is the difference of the points, as vectors,   Then, using the point as a refernce point, the vector parametric equation of the line is again . Or, in scalar parametric form,     Lines in  In , the equation of a line builds off the case for . Notice that in Cartesian coordinates, it is unclear how to extend the plane equation , to an equation in involving all of .  Again, a line can be completely determined by a point (say ), and a vector (say ).  Then, if is a point on the line, then is parallel to . That is, for some . Then, the line can be written as,   Consider a line through the point , in the direction of the non-zero vector . If is a point on the line, then the line has equation,   which is called the vector parametric form . The vector is called a direction vector for the line.   Then, similarly, we can compare components, to obtain the scalar parametric form of a line,   Again, the direction vector and point are both not unique.  Similarly, we can use two points to specify the line, given by,     Cartesian Equation of a Line in  Using some algebraic manipulations, we can eliminate the parameter , to write the equation of a line in Cartesian form. Recall that,   Then, solving for in each equation,   For every , the three quantities on the right-hand side of these equations must be equal. That is,   This is the Cartesian equation of a line in . Really, it is two equations, say,     Affine Combination Form of a Line  Let be vectors. Then, consider the line segment connecting the two heads of the vectors in standard position. The midpoint of this line segment is the point . That is, the linear combination,   More generally, by varying the weights of this linear combination, but requiring that the weights sum to 1, we can reach every point along this line segment. Further, if we allow the weights to vary over all real numbers (but still require them to sum to 1), then we can access all points on the line extending in the direction of this segment. Equivalently, the line along .  Then, if we are given two points in the plane, we can form the line between them by considering the set of all linear combinations of the vectors, where the weights sum to 1. We specify this by denoting one weight by , and the other weight by . Then,   Linear combinations where the weights sum to 1 are called affine combinations .   "
},
{
  "id": "p-138",
  "level": "2",
  "url": "section-VEOL.html#p-138",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cartesian equation slope-intercept form "
},
{
  "id": "p-139",
  "level": "2",
  "url": "section-VEOL.html#p-139",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parameter "
},
{
  "id": "theorem-4",
  "level": "2",
  "url": "section-VEOL.html#theorem-4",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "",
  "body": " Consider a line through the point , in the direction of the non-zero vector . If is a point on the line, then the line has equation,   which is called the vector parametric form . The vector is called a direction vector for the line. In other words, a point is on the line if and only if there exists a number such that .  "
},
{
  "id": "p-153",
  "level": "2",
  "url": "section-VEOL.html#p-153",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar parametric form of a line "
},
{
  "id": "theorem-5",
  "level": "2",
  "url": "section-VEOL.html#theorem-5",
  "type": "Theorem",
  "number": "3.2.2",
  "title": "",
  "body": " Consider a line through the point , in the direction of the non-zero vector . If is a point on the line, then the line has equation,   which is called the vector parametric form . The vector is called a direction vector for the line.  "
},
{
  "id": "p-170",
  "level": "2",
  "url": "section-VEOL.html#p-170",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "midpoint "
},
{
  "id": "p-173",
  "level": "2",
  "url": "section-VEOL.html#p-173",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "affine combinations "
},
{
  "id": "section-DP",
  "level": "1",
  "url": "section-DP.html",
  "type": "Section",
  "number": "3.3",
  "title": "The Dot Product",
  "body": " The Dot Product     Vector Direction  Recall that every vector is associated with a unit vector. Slightly more generally, every direction is associcated with a unit vector. Further, every unit vector is associated with a particular direction, or angle. If is a unit vector, its terminal point is on the unit circle. Then, where is the angle from the direction of the positive x-axis to the direction of .  Then, a general vector can be written as,   where is the unit vector in the direction of . Alternatively,   where is the distance from to the origin, and is the angle from the direction of the positive -axis to the direction of . This represents the vector in polar coordinates. This may be familiar from pre-calculus or calculus.  We want to measure the degree to which two vectors point in the same direction, i.e. the degree to which they are parallel. Let be vectors, given by , with representation,   where , and are their respective angles with the positive -axis. Then, let be the angle between these vectors (without loss of generality, suppose that ). Then, this angle can be at most , or radians.  Intuitively, if this angle is small, then the vectors are more parallel, and if this angle is close to , then the vectors are less parallel. If the angle is close to , then the vectors are close to being anti-parallel.  It turns out that we can use the cosine of the angle to create a numerical measure of this parallel-ness. Here,   Then, using the cosine difference identity,   Then, recall that for the vectors, the cosines and sines of and can be determined using the components of the vectors. In particular,   Or, more explicitly,   This gives a measure of parallelness of and , in terms of their components. The numerator of this formula comes up often enough to be given its own name, called the dot product .    Dot Product of Vectors  Here, we define the dot product of vectors. First, for vectors in .   Let be vectors. Then, the dot product of and , denoted by , is the sum of the products of the corresponding components,    The name dot product comes from the fact that the multiplication is denoted by a dot. The dot product is also called the scalar product , because the product produces a scalar value. It is also called the inner product , for more complicated reasons.    Properties of the Dot Product  The dot product has some basic algebraic properties.   Let be vectors. Then,   Commutative property, .  Distributive property, .  Associativity with scalar multiplication, for ,     Each of these properties basically follows from the definition of a dot product, and the corresponding properties for real numbers. Let . Then,     This expression is equal to,   This is also equal to,     The dot product also relates to the magnitude of a vector. Consider the dot product of a vector with itself,   This is precisely the square of the magnitude of . Thus,     Angle Between Vectors  Let be non-zero vectors in . Then, positioning the vectors with a common tail, this determines a (unique) angle between them. This is the smallest angle between the two vectors, which forces to be in the range . This is called the angle between and .    Alternate Characterization for the Dot Product   Let be vectors, be the angle between and . Then,    This is an alternate characterization for the dot product, in that we could have instead defined the dot product using this formula, and then show that this definition implies the previous definition.  The proof of this fact follows from the geometry of triangles, in particular the law of cosines. Applying the law of cosines to a particular triangle of vectors shows the relationship between the dot product and the angle between vectors.   From the vectors , form a triangle by joining the heads of the two vectors to form the vector . Then, by the law of cosines, we can relate the angle between the vectors with the lengths of the sides of this triangle (given by the magnitudes of the vectors involved). This gives,   Then, expanding the right-hand side allows us to rewrite in terms of the dot product,   Then,   as desired.     Computing the Angle Between Vectors  The dot product can be written in terms of the cosine of the angle between two vectors, so it can be used to compute this angle.   Angle between vectors  Let be non-zero vectors, be the angle between them. Then,      Dot Product and Parallel-ness  If the angle between and is a right angle, i.e. , then we say that and are perpndicular .  If , then the formula for the dot product becomes,   This provides a test to determine if and are perpendicular. That is, if .  However, conversely, if , this implies that at least one of is equal to 0. If either of are 0, then the corresponding vector is the zero vector. Recall that the zero vector is said to be perpendicular to all vectors (in fact, the reason for this convention is to make this theorem universal). In summary,   Perpendicular if and only if zero dot product  Vectors are perpendicular if and only if .     Dot Product for Vectors in  The dot product for vectors in is defined in a similar way.   Let be vectors. Then, the dot product of and is defined by,    This dot product shares many of the same properties. First, the algebraic properties.   Let be vectors. Then,   .  .  For ,     In addition, the angle properties of the dot product are still valid. However, it is more non-trivial to prove this result.   Let be vectors, be the angle between and . Then,   And,      Dot Product for Vectors in (Inner Product)  The dot product can be extended to . It is often called the inner product.   Let be vectors. Then, the dot product of and is defined by,    If are vectors in , then recall that thtey are considered matrices. Then, the transpose is a matrix, and the matrix product is a matrix, whose entry is given by the dot product,   Strictly speaking, the product is a matrix, however it is treated as a real number and written without brackets.  Then, the product is called the inner product of and .  All of the properties of the dot product generalize for the inner product in .   Let be vectors in . Then,   Commutative property, .  Distributive property, .  Associativity with scalar multiplication, for ,    Let . Then, FINISH.  Also,   Let . Then, , and if and only if .    In general,      Pythagorean Theorem    Two vectors in are perpendicular if and only if .      Angle Between Vectors  Recall that in and , the (geometric) angle between two vectors is given by the equation . For higher dimensions, there is no physical notion of angle. However, that equation can be used to define the angle between .   Angle between vectors in      In statistics, the value of is called the correlation coefficient, for suitable vectors .   "
},
{
  "id": "definition-27",
  "level": "2",
  "url": "section-DP.html#definition-27",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": " Let be vectors. Then, the dot product of and , denoted by , is the sum of the products of the corresponding components,   "
},
{
  "id": "p-188",
  "level": "2",
  "url": "section-DP.html#p-188",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar product inner product "
},
{
  "id": "theorem-6",
  "level": "2",
  "url": "section-DP.html#theorem-6",
  "type": "Theorem",
  "number": "3.3.2",
  "title": "",
  "body": " Let be vectors. Then,   Commutative property, .  Distributive property, .  Associativity with scalar multiplication, for ,   "
},
{
  "id": "proof-2",
  "level": "2",
  "url": "section-DP.html#proof-2",
  "type": "Proof",
  "number": "3.3.3.1",
  "title": "",
  "body": " Each of these properties basically follows from the definition of a dot product, and the corresponding properties for real numbers. Let . Then,     This expression is equal to,   This is also equal to,    "
},
{
  "id": "p-196",
  "level": "2",
  "url": "section-DP.html#p-196",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "angle between and "
},
{
  "id": "definition-28",
  "level": "2",
  "url": "section-DP.html#definition-28",
  "type": "Definition",
  "number": "3.3.3",
  "title": "",
  "body": " Let be vectors, be the angle between and . Then,   "
},
{
  "id": "proof-3",
  "level": "2",
  "url": "section-DP.html#proof-3",
  "type": "Proof",
  "number": "3.3.5.1",
  "title": "",
  "body": " From the vectors , form a triangle by joining the heads of the two vectors to form the vector . Then, by the law of cosines, we can relate the angle between the vectors with the lengths of the sides of this triangle (given by the magnitudes of the vectors involved). This gives,   Then, expanding the right-hand side allows us to rewrite in terms of the dot product,   Then,   as desired.  "
},
{
  "id": "theorem-7",
  "level": "2",
  "url": "section-DP.html#theorem-7",
  "type": "Theorem",
  "number": "3.3.4",
  "title": "Angle between vectors.",
  "body": " Angle between vectors  Let be non-zero vectors, be the angle between them. Then,   "
},
{
  "id": "theorem-8",
  "level": "2",
  "url": "section-DP.html#theorem-8",
  "type": "Theorem",
  "number": "3.3.5",
  "title": "Perpendicular if and only if zero dot product.",
  "body": " Perpendicular if and only if zero dot product  Vectors are perpendicular if and only if .  "
},
{
  "id": "definition-29",
  "level": "2",
  "url": "section-DP.html#definition-29",
  "type": "Definition",
  "number": "3.3.6",
  "title": "",
  "body": " Let be vectors. Then, the dot product of and is defined by,   "
},
{
  "id": "theorem-9",
  "level": "2",
  "url": "section-DP.html#theorem-9",
  "type": "Theorem",
  "number": "3.3.7",
  "title": "",
  "body": " Let be vectors. Then,   .  .  For ,    "
},
{
  "id": "theorem-10",
  "level": "2",
  "url": "section-DP.html#theorem-10",
  "type": "Theorem",
  "number": "3.3.8",
  "title": "",
  "body": " Let be vectors, be the angle between and . Then,   And,   "
},
{
  "id": "definition-30",
  "level": "2",
  "url": "section-DP.html#definition-30",
  "type": "Definition",
  "number": "3.3.9",
  "title": "",
  "body": " Let be vectors. Then, the dot product of and is defined by,   "
},
{
  "id": "p-222",
  "level": "2",
  "url": "section-DP.html#p-222",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inner product "
},
{
  "id": "theorem-11",
  "level": "2",
  "url": "section-DP.html#theorem-11",
  "type": "Theorem",
  "number": "3.3.10",
  "title": "",
  "body": " Let be vectors in . Then,   Commutative property, .  Distributive property, .  Associativity with scalar multiplication, for ,   "
},
{
  "id": "proof-4",
  "level": "2",
  "url": "section-DP.html#proof-4",
  "type": "Proof",
  "number": "3.3.9.1",
  "title": "",
  "body": "Let . Then, FINISH. "
},
{
  "id": "theorem-12",
  "level": "2",
  "url": "section-DP.html#theorem-12",
  "type": "Theorem",
  "number": "3.3.11",
  "title": "",
  "body": " Let . Then, , and if and only if .  "
},
{
  "id": "corollary-1",
  "level": "2",
  "url": "section-DP.html#corollary-1",
  "type": "Corollary",
  "number": "3.3.12",
  "title": "",
  "body": " In general,   "
},
{
  "id": "theorem-13",
  "level": "2",
  "url": "section-DP.html#theorem-13",
  "type": "Theorem",
  "number": "3.3.13",
  "title": "",
  "body": " Two vectors in are perpendicular if and only if .  "
},
{
  "id": "definition-31",
  "level": "2",
  "url": "section-DP.html#definition-31",
  "type": "Definition",
  "number": "3.3.14",
  "title": "Angle between vectors in <span class=\"process-math\">\\(\\mathbb{R}^n\\)<\/span>.",
  "body": " Angle between vectors in     "
},
{
  "id": "section-VEOP",
  "level": "1",
  "url": "section-VEOP.html",
  "type": "Section",
  "number": "3.4",
  "title": "Vector Equations of Planes",
  "body": " Vector Equations of Planes   In , we can also form a plane. However, it is not immediately clear how to form the Cartesian equation of a plane in space. Recall that a line is defined by a point, and a slope or direction. However, planes do not have a clear notion of slope, because the inclination of a plane depends on the direction you are travelling.  First, we will consider the equation of a line in , from the perspective of perpendicularity, and the dot product. Then, this reasoning will generalize to a plane in .    Standard Form of a Line, and Normal Vectors  Recall that previously, we specified a line using a point on the line , and a direction vector . Alternatively, we could have instead specified a vector that is perpendicular to the line , called a normal vector . Then, for any point on the line, it has the property that is perpendicular to (previously, recall was parallel to ). Using dot products, this means that,   This is another form of the equation of a line. If , and , then this is equiavlent to,   This can be written more simply by expanding, and collecting the constant terms,   You may recognize this as the standard form of a line, typically written as . Also, in linear algebra, we prefer this form, because it connects to the form of a linear equation in terms of a linear system.  Conversely, the line has normal vector .    Planes in  In a similar way, it turns out that a plane can be specified using a point on the plane, and a vector pointing out of the plane, again called a normal vector . Let be a point in space, and let be a normal vector for the plane. Then, for any point on the plane, it has the property that , which is a vector that line parallel to the plane, is perpendicular to .   This is the equation of the plane in vector form. Notice that this is the same as the equation of a line, except the vectors involved have 3 coordinates instead of 2. In terms of Cartesian coordinates,   Again, expanding, and collecting the constant terms, we get,   Then, this can be written in the standard form,   where (or ). Notice the similarities to the standard form of a line, . Conversely, given the equation of a plane , the normal vector can be simply read off as . Of course, the normal vector of a plane is not unique, as any multiple of is also a normal vector of the plane.   Equation of a plane  Let be a point, be a non-zero vector. Then, the equation of the plane through and perpendicular to has equation,   Or,   where . Conversely, the graph of the equation is a plane perpendicular to , provided that .   If at least of the the scalars are non-zero, then the equation represents a plane. Otherwise, the normal vector is the zero vector, and the equation becomes , representing all of .  There exists exactly one plane passing through that is perpendicular to .  From another perspective, by first starting with all points in 3-dimensional space , and then by requiring the constraint equation , this constraint generally acts to reduce the number of degrees of freedom by 1, i.e. the result is a 2-dimensional object. It turns out that if this equation is linear (like the equation of a plane is), then the result will be a 2-dimensional flat surface, i.e. a plane. Similarly, in , a single linear equation reduces the 2-dimensional plane to a 1-dimensional line.    Planes Using Two Vectors: Cross Product  Another way of specifying a plane is to specify a point on the plane, and two non-parallel (non-zero) vectors . Then, a normal vector to this plane is the cross product .    Parametric Equation of a Plane  Similarly to lines, we can specify a plane in parametric form. Consider a point on the plane     Planes Using 3 Points  Yet another method to specify a plane is to specify 3 distinct points on the plane. If the points are , then a plane containing these three points, of the form , must satisfy the system,   This is a linear system in the 4 variables . Here, there are 4 unknowns, and only 3 equations, so we expect that there are more than one solution. Performing row reduction, we can solve the system, and determine the coefficients of the plane's equation.  This works, as long as the points are not colinear.  Another method, which uses vectors, is to directly determine the normal vector. Recall that if we a point on the plane, and two vectors such that and are on the plane, then the cross product is a normal vector of the plane. Let be the 3 points. Then, we can use one point (say, ) as the starting point. Then, the two points and are vectors which are parallel to the plane. Then, their cross product is a normal vector for the plane,     Summary  In summary, a plane can be defined by,   A point and a vector perpendicular to the plane.  Two vectors, that are not parallel.  Three points, which are not collinear.     Planes Parallel to the Coordinate Planes  In , the coordinate planes are the planes spanned by the axes, the -plane, -plane, and the -plane.  For example, the -plane is the set of all points with -coordinate equal to 0, and so it's Cartesian equation is . Similarly, the -plane and -plane have equations and , respectively.  Slightly more generally, the equations , , and , for some , represent a plane parallel to the coordinate planes, but units above or below.    Intersecting Planes  In almost all cases, two planes will intersect, and this intersection will be a line. Let and be the equation of two planes, with normal vectors . Then, the line of intersection will be perpendicular to both normal vectors and . Thus, it will be parallel to their cross product. In other words, is a direction vector for the line of intersection.  Then, it is sufficient to find a single point on the line. To do this, we can solve the system of equations,   This is a system with 3 variables and only 2 equations, so we expect there to be infinitely many solutions. In this case, we only need a single solution, so it is easiest to choose a convenient value (typically letting , , or in the two equations, and solving for the other two variables, resulting a solution, say . Then, the vector parametric equation of the line is,     Parallel Planes  Two planes are parallel if their normal vectors are parallel (or anti-parallel). If two planes are parallel, then they don't intersect.   "
},
{
  "id": "p-240",
  "level": "2",
  "url": "section-VEOP.html#p-240",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal vector "
},
{
  "id": "theorem-14",
  "level": "2",
  "url": "section-VEOP.html#theorem-14",
  "type": "Theorem",
  "number": "3.4.1",
  "title": "Equation of a plane.",
  "body": " Equation of a plane  Let be a point, be a non-zero vector. Then, the equation of the plane through and perpendicular to has equation,   Or,   where . Conversely, the graph of the equation is a plane perpendicular to , provided that .  "
},
{
  "id": "p-258",
  "level": "2",
  "url": "section-VEOP.html#p-258",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate planes "
},
{
  "id": "section-VES",
  "level": "1",
  "url": "section-VES.html",
  "type": "Section",
  "number": "4.1",
  "title": "Vector Equations, Span",
  "body": " Vector Equations, Span  Vectors will provide another interpretation for a system of linear equations. In particular, a linear system can be represented as an equation involving a certain linear combinations of vectors.   Vector Equations  A vector equation is an equation involving vectors.   Consider the linear system,   By definition of vector equality, this is equivalent to the (vector) equation,   Then, the left hand side can be expanded, to show how it depends on and ,   Then, solving this linear system involves determining all possible linear combinations of the vectors and which are equal to . Further, the column vectors are precisely the columns of the coefficient matrix of the system,   Geometrically, we can solve this system using the parallelogram rule for addition. Let and . Sketch all of these vectors in standard position. Sketch a parallelogram with sides parallel to and , with one vertex at the origin, and opposite vertex at the the head of . Then, the sides parallel to and are multiples of and whose sum (by the parallelogram rule) is . These scalar multiples are the solution to the system.   More generally, consider a system of linear equations,   with augmented matrix,   For brevity, and to focus on the column vectors making up the matrix, we will denote the columns of the coefficient matrix as , and the constant vector as . Then, the augmented matrix can be denoted by,   Intuitively, this is a row vector with entries which are themselves column vectors, forming a matrix.  Then, in summary,   Linear systems as vector equations.  The system of linear equations,   with corresponding augmented matrix,   has the same solution set as the vector equation,    In other words, solving a linear system can be thought of as determining all linear combinations of the column vectors of the coefficient matrix that are equal to the constant vector . This perspective is called the column picture .  Conversely, to solve a vector equation,   Form the associated system of linear equations in , and form its augmented matrix, whose columns will be . Then, use row reduction to determine the solution.   Vector equations as a linear system  The vector equation,   has the same solution set as the system of linear equations in which has augmented matrix given by,    Consider the linear system, which has vector form, From this perspective, solving this linear system involves finding all possible linear combinations of the vectors and in the plane, that are equal to the vector .     Introduction to Span of Vectors in  One of the key ideas in linear algebra is to study the set of all vectors which can be written as a linear combination of a fixed set of vectors. We say that these are all the vectors spanned , or generated , by this set.  Broadly, the span of a collection of vectors is the set of all of their linear combinations.   Let be vectors. Then, the span of and is the set of all of their linear combinations, and is denoted by . In other words,    Intuitively, span means the amount of space something covers , and the span of vectors is all the possible vectors which can be reached by combining using only the two fundamental operations of addition and scalar multiplication.   A single vector in  Consider a single vector in . The span of , , is the set of all linear combinations of the single vector . There is only one vector, so there is no addition. In this way, is the set of all multiples of ,   Then, in , this forms a line, in particular a line through the origin , and through .    Two vectors in  Consider two vectors in . Then, by definition,   First, suppose that are non-zero. If are not parallel, then it turns out that the span of and is all of , i.e. the entire plane. That is, every vector in can be written as a linear combination of .  For example, a familiar case is for the standard basis vectors . These vectors are not parallel (they are perpendicular), so,   and we know that every vector in can be written as a linear combination of and .  If are parallel, that is, either vector is a scalar multiple of the other, then the span of is a line (in the plane). Intuitively, the second vector doesn't add any new additional possible vectors. More precisely, if say , then,   That is, any linear combination of and is really just a multiple of . Conversely, any multiple of can be written as for some weights . All of this reasoning can be oriented in the opposite direction, to say that all linear combinations are just a multiple of . That is,   In the most extremely pathological case, if are both the zero vector, then their span is just the zero vector, i.e. a single point.    Span of vectors in  Consider two vectors in . If are not parallel, then the span of forms a plane in .  Adding a third vector to the span, which is not included in the plane spanned by and , results in the entire 3D space .    Let be vectors. Then, the span of is given by,      Span of Vectors  Let be vectors. The span of , denoted by , is the set of all linear combinations of . In other words,   Notice that the span contains the zero vector, because . Also, it contains every scalar multiple of every vector in the span, for example, every scalar multiple of , because .  More generally, by definition, a vector is in if and only if can be written as a linear combination of , i.e. the following vector equation has a solution,   Thus, to determine if is in the span of , solve the linear system with augmented matrix,   If this system has a solution, then , and any solution provides the weights of the linear combination.   "
},
{
  "id": "p-265",
  "level": "2",
  "url": "section-VES.html#p-265",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector equation "
},
{
  "id": "example-9",
  "level": "2",
  "url": "section-VES.html#example-9",
  "type": "Example",
  "number": "4.1.1",
  "title": "",
  "body": " Consider the linear system,   By definition of vector equality, this is equivalent to the (vector) equation,   Then, the left hand side can be expanded, to show how it depends on and ,   Then, solving this linear system involves determining all possible linear combinations of the vectors and which are equal to . Further, the column vectors are precisely the columns of the coefficient matrix of the system,   Geometrically, we can solve this system using the parallelogram rule for addition. Let and . Sketch all of these vectors in standard position. Sketch a parallelogram with sides parallel to and , with one vertex at the origin, and opposite vertex at the the head of . Then, the sides parallel to and are multiples of and whose sum (by the parallelogram rule) is . These scalar multiples are the solution to the system.  "
},
{
  "id": "theorem-15",
  "level": "2",
  "url": "section-VES.html#theorem-15",
  "type": "Theorem",
  "number": "4.1.2",
  "title": "Linear systems as vector equations..",
  "body": " Linear systems as vector equations.  The system of linear equations,   with corresponding augmented matrix,   has the same solution set as the vector equation,   "
},
{
  "id": "p-279",
  "level": "2",
  "url": "section-VES.html#p-279",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "column picture "
},
{
  "id": "theorem-16",
  "level": "2",
  "url": "section-VES.html#theorem-16",
  "type": "Theorem",
  "number": "4.1.3",
  "title": "Vector equations as a linear system.",
  "body": " Vector equations as a linear system  The vector equation,   has the same solution set as the system of linear equations in which has augmented matrix given by,   "
},
{
  "id": "example-10",
  "level": "2",
  "url": "section-VES.html#example-10",
  "type": "Example",
  "number": "4.1.4",
  "title": "",
  "body": "Consider the linear system, which has vector form, From this perspective, solving this linear system involves finding all possible linear combinations of the vectors and in the plane, that are equal to the vector . "
},
{
  "id": "definition-32",
  "level": "2",
  "url": "section-VES.html#definition-32",
  "type": "Definition",
  "number": "4.1.5",
  "title": "",
  "body": "Broadly, the span of a collection of vectors is the set of all of their linear combinations. "
},
{
  "id": "definition-33",
  "level": "2",
  "url": "section-VES.html#definition-33",
  "type": "Definition",
  "number": "4.1.6",
  "title": "",
  "body": " Let be vectors. Then, the span of and is the set of all of their linear combinations, and is denoted by . In other words,   "
},
{
  "id": "example-11",
  "level": "2",
  "url": "section-VES.html#example-11",
  "type": "Example",
  "number": "4.1.7",
  "title": "A single vector in <span class=\"process-math\">\\(\\mathbb{R}^2\\)<\/span>.",
  "body": " A single vector in  Consider a single vector in . The span of , , is the set of all linear combinations of the single vector . There is only one vector, so there is no addition. In this way, is the set of all multiples of ,   Then, in , this forms a line, in particular a line through the origin , and through .  "
},
{
  "id": "example-12",
  "level": "2",
  "url": "section-VES.html#example-12",
  "type": "Example",
  "number": "4.1.8",
  "title": "Two vectors in <span class=\"process-math\">\\(\\mathbb{R}^2\\)<\/span>.",
  "body": " Two vectors in  Consider two vectors in . Then, by definition,   First, suppose that are non-zero. If are not parallel, then it turns out that the span of and is all of , i.e. the entire plane. That is, every vector in can be written as a linear combination of .  For example, a familiar case is for the standard basis vectors . These vectors are not parallel (they are perpendicular), so,   and we know that every vector in can be written as a linear combination of and .  If are parallel, that is, either vector is a scalar multiple of the other, then the span of is a line (in the plane). Intuitively, the second vector doesn't add any new additional possible vectors. More precisely, if say , then,   That is, any linear combination of and is really just a multiple of . Conversely, any multiple of can be written as for some weights . All of this reasoning can be oriented in the opposite direction, to say that all linear combinations are just a multiple of . That is,   In the most extremely pathological case, if are both the zero vector, then their span is just the zero vector, i.e. a single point.  "
},
{
  "id": "example-13",
  "level": "2",
  "url": "section-VES.html#example-13",
  "type": "Example",
  "number": "4.1.9",
  "title": "Span of vectors in <span class=\"process-math\">\\(\\mathbb{R}^3\\)<\/span>.",
  "body": " Span of vectors in  Consider two vectors in . If are not parallel, then the span of forms a plane in .  Adding a third vector to the span, which is not included in the plane spanned by and , results in the entire 3D space .  "
},
{
  "id": "definition-34",
  "level": "2",
  "url": "section-VES.html#definition-34",
  "type": "Definition",
  "number": "4.1.10",
  "title": "",
  "body": " Let be vectors. Then, the span of is given by,   "
},
{
  "id": "definition-35",
  "level": "2",
  "url": "section-VES.html#definition-35",
  "type": "Definition",
  "number": "4.1.11",
  "title": "",
  "body": "Let be vectors. The span of , denoted by , is the set of all linear combinations of . In other words,  "
},
{
  "id": "section-MEMVP",
  "level": "1",
  "url": "section-MEMVP.html",
  "type": "Section",
  "number": "4.2",
  "title": "Matrix Equations, Matrix-Vector Product",
  "body": " Matrix Equations, Matrix-Vector Product  Next, we will combine matrices and vectors, in order to write a system of linear equations as an equation relating matrices and vectors.   Product of a Matrix with a Vector  Let be an matrix, be a vector, . Then, the product of and , is the vector defined by,   In general, to detemrine the th entry of the vector , compute the product of the th row of , and , as,   This operation, of multiplying two vectors of matching lengths to produce a single number (in particular a row vector and a column vector), is called a dot product , of the two vectors. More generally, for vectors ,     Matrix Form of a Linear System  Multiplication of a matrix and a vector is precisely defined as to align with systems of equations. In particular, for the system of equations,  we define, Then, the system can be represented compactly in the form . This matrix form captures all of the information of the linear system.   Linear Combination Interpretation  From the previous definition of a matrix-vector product, we can expand out the product as,  In this way, the product is precisely a linear combination of the columns of , with weights given by the entries of . In summary,  The product is the linear combination of the columns of with the corresponding entries of as weights. More precisely, if , and , then,      Matrix Equations as Linear Systems  This provides yet another interpretation of linear systems.   Let be an matrix with columns , and let . Then, the matrix equation has precisely the same solution set as the system of linear equations whose augmented matrix is,    The equation has a solution if and only if is a linear combination of the columns of .      The Identity Matrix  Recall that for real numbers, multiplying a number by 1 results in the number being unchanged. We say that 1 is the multiplicative identity for real numbers, and that for all . Similarly, we can define a matrix which, when multiplied by any vector, leaves it unchanged. This matrix is called an identity matrix .  An identity matrix is a square matrix with 1's along the main diagonal (from top left to bottom right) and 0's everywhere else. In particular, the identity matrix is denoted by , and is given by,   For example, the identity matrix and the identity matrix are given by,   The identity matrix acts as a multiplicative identity , in that it has the property that for all . Indeed, for example,     Properties of the Matrix-Vector Product   Let be an matrix, be vectors, be a scalar. Then,        Proof of case Let . Then, Also,    Proof of general case Let . Then, Also,    "
},
{
  "id": "definition-36",
  "level": "2",
  "url": "section-MEMVP.html#definition-36",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "Let be an matrix, be a vector, . Then, the product of and , is the vector defined by,  "
},
{
  "id": "p-304",
  "level": "2",
  "url": "section-MEMVP.html#p-304",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product "
},
{
  "id": "theorem-17",
  "level": "2",
  "url": "section-MEMVP.html#theorem-17",
  "type": "Theorem",
  "number": "4.2.2",
  "title": "",
  "body": " The product is the linear combination of the columns of with the corresponding entries of as weights. More precisely, if , and , then,   "
},
{
  "id": "theorem-18",
  "level": "2",
  "url": "section-MEMVP.html#theorem-18",
  "type": "Theorem",
  "number": "4.2.3",
  "title": "",
  "body": " Let be an matrix with columns , and let . Then, the matrix equation has precisely the same solution set as the system of linear equations whose augmented matrix is,  "
},
{
  "id": "corollary-2",
  "level": "2",
  "url": "section-MEMVP.html#corollary-2",
  "type": "Corollary",
  "number": "4.2.4",
  "title": "",
  "body": " The equation has a solution if and only if is a linear combination of the columns of .  "
},
{
  "id": "definition-37",
  "level": "2",
  "url": "section-MEMVP.html#definition-37",
  "type": "Definition",
  "number": "4.2.5",
  "title": "",
  "body": "An identity matrix is a square matrix with 1's along the main diagonal (from top left to bottom right) and 0's everywhere else. In particular, the identity matrix is denoted by , and is given by,  "
},
{
  "id": "theorem-19",
  "level": "2",
  "url": "section-MEMVP.html#theorem-19",
  "type": "Theorem",
  "number": "4.2.6",
  "title": "",
  "body": " Let be an matrix, be vectors, be a scalar. Then,      "
},
{
  "id": "proof-5",
  "level": "2",
  "url": "section-MEMVP.html#proof-5",
  "type": "Proof",
  "number": "4.2.6.1",
  "title": "Proof of <span class=\"process-math\">\\(2 \\times 2\\)<\/span> case.",
  "body": " Proof of case Let . Then, Also,  "
},
{
  "id": "proof-6",
  "level": "2",
  "url": "section-MEMVP.html#proof-6",
  "type": "Proof",
  "number": "4.2.6.2",
  "title": "Proof of general case.",
  "body": " Proof of general case Let . Then, Also,  "
},
{
  "id": "section-SSOLE",
  "level": "1",
  "url": "section-SSOLE.html",
  "type": "Section",
  "number": "4.3",
  "title": "Solution Sets of Linear Equations",
  "body": " Solution Sets of Linear Equations  Next, we will use the matrix representation of a linear system and the language of vectors to describe the solution sets to linear systems. These solution sets will be another important theme throughout linear algebra.   Homogeneous Systems  First, it turns out that in order to study solutions to , it is helpful to first study the more simple case where , i.e. the linear system . These systems are called homogeneous .  A system of linear equations is homogeneous if it can be written in the form , where is an matrix and is the zero vector in . Otherwise, a system is said to be non-homogeneous .  Homogeneous systems always have at least one solution (that is, they are always consistent), in particular the solution , often called the trivial solution. Then, we want to consider whether has any non-trivial solutions, that is, solutions which are not the zero vector.  Recall that if a system is consistent, then it has a unique solution if the REF of its augmented matrix has no free variables, and it has infinitely many solution if there at least one free variable. Then, for homogeneous systems,   The homogeneous system has a non-trivial solution if and only if the system has at least one free variable.    Consider the system,   This is a homogeneous system. In matrix form,   Converting to REF,   Since is a free variable, the homogeneous system has a non-trivial solution. Converting to RREF,   Then, solving for the basic variables and in terms of the free variables gives , and free. Then, in vector form,   Every solution to this system is a scalar multiple of the vector . In this way, the solution set is precisely the span of this vector,   Geometrically, this is a line in through the origin.    One equation in two variables  Consider the very simple homogeneous linear system which only consists of one equation,   which has augmented matrix,   This matrix is already in RREF (the only leading entry is 1, and all of the entries above it are 0). Then, is a free variable. Letting , we get that . Then, the solution is of the form,   Notice that this is precisely the parametric equation of a line in 2D, through the origin , and with direction vector . Also, the solution set is precisely .    One equation in three variables  Consider the homogeneous system with the single equation,   with augmented matrix,   Again, this is already in RREF, with free variables and . Then, letting be parameters, we get that . Then, solutions are of the form,   Note that this is precisely the parametric equation of a plane in 3D, which passes through , and with direction vectors and . Also, the solution set is precisely,    In general, the solution set of a homogeneous system can always be written as the span of some collection of vectors. Also, the number of vectors in the span correpsonds to the number of free variables. If the system has no non-trivial solutions, then the solution set is .  A solution set described in terms of parameters and vectors is called parametric vector form .    Non-homogeneous Systems  Then, it turns out that to solve a non-homogeneous system, it just requires adding a bit more information onto the solution its corresponding homogeneous system.  When solving using row reduction, the solution in parametric vector form will be a particular vector , along with a linear combination of other vectors.  Geometrically, the vector addition acts as a translation onto vectors which are a solution of the associated homogeneous system. For example, if the solution set to homogeneous equation is a line , then the solution set to is the line translated by the vector , forming a line which is parallel to . In other words, the solution set of is a line through parallel to the solution set of .  Similarly, if the solution set to is a plane, then the solution set to is a plane through which is parallel to the solution set of (recall for planes, parallel means parallel normal vectors).   Let be a linear system, which is consistent with solution . Then, the solution set of is the set of all vectors of the form , where is any solution of the associated homogeneous system.    If is a solution of , and is a solution of the associated homogeneous system, then and . Then,    Note that if is not consistent, then the solution set is the empty set.    Solving a Consistent System in Parametric Vector Form  In summary, to solve ,   Use row reduction to convert the augmented matrix to RREF.  Solve for each basic variable in terms of any free variables.  Write a typical solution as a vector which depends on any free variables.  Decompose into a linear combination of vectors with only numerical entries, and use free variables as parameters.     Intersection of Two Planes  In most cases, two planes will intersect to form a line in . For the planes,   The intersection of these planes is, by definition, the set of all points which are on both planes. A point is on each plane if and only if it satisfies its equation, so finding the intersection of planes is equivalent to solving the system of two equations for .  Otherwise, if the two planes have parallel normal vectors, then the planes themselves will be parallel, and not intersect. Finally, if the planes are parallel, it is possible that they coincide (overlap).   Consider two planes, with equations,   The augmented matrix of this system is,   Converting to RREF using row reduction,   Then, is a free variable, and solving for the basic variables and in terms of , and . Then, in vector form,   This is the parametric equation of a line (in ), which passes through the point and with direction vector .     Equation of Line as Intersection of Two Planes    Intersection of Three Planes  In most cases, three planes will intersect at a single point. Again, this corresponds to solving the system of equations for the three planes.   "
},
{
  "id": "definition-38",
  "level": "2",
  "url": "section-SSOLE.html#definition-38",
  "type": "Definition",
  "number": "4.3.1",
  "title": "",
  "body": "A system of linear equations is homogeneous if it can be written in the form , where is an matrix and is the zero vector in . Otherwise, a system is said to be non-homogeneous . "
},
{
  "id": "p-316",
  "level": "2",
  "url": "section-SSOLE.html#p-316",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trivial non-trivial "
},
{
  "id": "theorem-20",
  "level": "2",
  "url": "section-SSOLE.html#theorem-20",
  "type": "Theorem",
  "number": "4.3.2",
  "title": "",
  "body": " The homogeneous system has a non-trivial solution if and only if the system has at least one free variable.  "
},
{
  "id": "example-14",
  "level": "2",
  "url": "section-SSOLE.html#example-14",
  "type": "Example",
  "number": "4.3.3",
  "title": "",
  "body": " Consider the system,   This is a homogeneous system. In matrix form,   Converting to REF,   Since is a free variable, the homogeneous system has a non-trivial solution. Converting to RREF,   Then, solving for the basic variables and in terms of the free variables gives , and free. Then, in vector form,   Every solution to this system is a scalar multiple of the vector . In this way, the solution set is precisely the span of this vector,   Geometrically, this is a line in through the origin.  "
},
{
  "id": "example-15",
  "level": "2",
  "url": "section-SSOLE.html#example-15",
  "type": "Example",
  "number": "4.3.4",
  "title": "One equation in two variables.",
  "body": " One equation in two variables  Consider the very simple homogeneous linear system which only consists of one equation,   which has augmented matrix,   This matrix is already in RREF (the only leading entry is 1, and all of the entries above it are 0). Then, is a free variable. Letting , we get that . Then, the solution is of the form,   Notice that this is precisely the parametric equation of a line in 2D, through the origin , and with direction vector . Also, the solution set is precisely .  "
},
{
  "id": "example-16",
  "level": "2",
  "url": "section-SSOLE.html#example-16",
  "type": "Example",
  "number": "4.3.5",
  "title": "One equation in three variables.",
  "body": " One equation in three variables  Consider the homogeneous system with the single equation,   with augmented matrix,   Again, this is already in RREF, with free variables and . Then, letting be parameters, we get that . Then, solutions are of the form,   Note that this is precisely the parametric equation of a plane in 3D, which passes through , and with direction vectors and . Also, the solution set is precisely,   "
},
{
  "id": "p-335",
  "level": "2",
  "url": "section-SSOLE.html#p-335",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parametric vector form "
},
{
  "id": "theorem-21",
  "level": "2",
  "url": "section-SSOLE.html#theorem-21",
  "type": "Theorem",
  "number": "4.3.6",
  "title": "",
  "body": " Let be a linear system, which is consistent with solution . Then, the solution set of is the set of all vectors of the form , where is any solution of the associated homogeneous system.  "
},
{
  "id": "proof-7",
  "level": "2",
  "url": "section-SSOLE.html#proof-7",
  "type": "Proof",
  "number": "4.3.2.1",
  "title": "",
  "body": " If is a solution of , and is a solution of the associated homogeneous system, then and . Then,   "
},
{
  "id": "example-17",
  "level": "2",
  "url": "section-SSOLE.html#example-17",
  "type": "Example",
  "number": "4.3.7",
  "title": "",
  "body": " Consider two planes, with equations,   The augmented matrix of this system is,   Converting to RREF using row reduction,   Then, is a free variable, and solving for the basic variables and in terms of , and . Then, in vector form,   This is the parametric equation of a line (in ), which passes through the point and with direction vector .  "
},
{
  "id": "section-MO",
  "level": "1",
  "url": "section-MO.html",
  "type": "Section",
  "number": "5.1",
  "title": "Matrix Operations",
  "body": " Matrix Operations  Recall that an matrix is a rectangular array of real numbers with rows and columns, The th column of is the column vector . Then, the matrix can be written as, The arithmetic of vectors naturally extends to the more general matrices. Recall that a vector can be thought of as a particular type of matrix.   Matrix Equality, Addition, Subtraction, and Scalar Multiplication  Two matrices and are equal if they have equal dimensions , and each corresponding entries are equal, i.e. for all .   Matrix addition  Let be matrices (of the same dimension). Then, the sum of and , is the matrix formed by adding the corresponding entries of and . In other words,    Note that addition is only defined for matrices that have equal dimensions. Subtraction of matrices is defined similarly.  For matrices,    Scalar multiplication Let be an matrix, be a scalar. Then, is the matrix formed by multiplying each of the entries of by , or,   For matrices,   The previous definitions focussed on the considering matrices entry-wise (that is, entry-by-entry). The operations for a matrix can also be thought of in terms of column vectors.   The sum is the matrix whose columns are the sums of the corresponding columns of and , or,  The scalar multiple is the matrix whose columns are the scalar multiples of vectors , or,   In a similar way as vectors, is denoted by , and also subtraction of matrices is just .    Properties of Matrix Addition  An matrix whose entries are all zero is called a zero matrix , and is typically denoted by O, or sometimes 0.  The size of a zero matrix is usually clear from the context. The zero matrix has the property that,   i.e. it is the additive identity for the set of all matrices. If is used to denote the zero matrix, then note it is clear in this equation that 0 is a matrix, since a matrix cannot be added to the number 0. Also, the zero matrix has the property that , that is, the zero scalar multiple of any matrix is the zero matrix.  Let be matrices, be the zero matrix. Then, addition has the following properties:   Commutative property .  Associative property .  Additive identity property .  Additive inverse property . For a matrix , the matrix , consisting of the additive inverses of the entires of , is the additive inverse of , as,    The associative property means that sums of three or more matrices can be written without brackets, for example .  Matrix addition also follows the natural laws when combined with scalar multiplication.   Let be matrices, be scalars. Then,   Scalar distributes over matrix addition .  Matrix distributes over scalar addition .  Associativity of scalar multiplication .      Proof of 1. for matrices . Let . Then,      "
},
{
  "id": "definition-39",
  "level": "2",
  "url": "section-MO.html#definition-39",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "Two matrices and are equal if they have equal dimensions , and each corresponding entries are equal, i.e. for all . "
},
{
  "id": "definition-40",
  "level": "2",
  "url": "section-MO.html#definition-40",
  "type": "Definition",
  "number": "5.1.2",
  "title": "Matrix addition.",
  "body": " Matrix addition  Let be matrices (of the same dimension). Then, the sum of and , is the matrix formed by adding the corresponding entries of and . In other words,   "
},
{
  "id": "definition-41",
  "level": "2",
  "url": "section-MO.html#definition-41",
  "type": "Definition",
  "number": "5.1.3",
  "title": "Scalar multiplication.",
  "body": " Scalar multiplication Let be an matrix, be a scalar. Then, is the matrix formed by multiplying each of the entries of by , or,  "
},
{
  "id": "definition-42",
  "level": "2",
  "url": "section-MO.html#definition-42",
  "type": "Definition",
  "number": "5.1.4",
  "title": "",
  "body": "An matrix whose entries are all zero is called a zero matrix , and is typically denoted by O, or sometimes 0. "
},
{
  "id": "p-360",
  "level": "2",
  "url": "section-MO.html#p-360",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "additive identity "
},
{
  "id": "theorem-22",
  "level": "2",
  "url": "section-MO.html#theorem-22",
  "type": "Theorem",
  "number": "5.1.5",
  "title": "",
  "body": " Let be matrices, be the zero matrix. Then, addition has the following properties:   Commutative property .  Associative property .  Additive identity property .  Additive inverse property . For a matrix , the matrix , consisting of the additive inverses of the entires of , is the additive inverse of , as,   "
},
{
  "id": "theorem-23",
  "level": "2",
  "url": "section-MO.html#theorem-23",
  "type": "Theorem",
  "number": "5.1.6",
  "title": "",
  "body": " Let be matrices, be scalars. Then,   Scalar distributes over matrix addition .  Matrix distributes over scalar addition .  Associativity of scalar multiplication .   "
},
{
  "id": "proof-8",
  "level": "2",
  "url": "section-MO.html#proof-8",
  "type": "Proof",
  "number": "5.1.2.1",
  "title": "",
  "body": "  Proof of 1. for matrices . Let . Then,    "
},
{
  "id": "section-ITLT",
  "level": "1",
  "url": "section-ITLT.html",
  "type": "Section",
  "number": "5.2",
  "title": "Intro to Linear Transformations",
  "body": " Intro to Linear Transformations  Another benefit of the matrix form of a linear system is that it allows us to view a matrix as an object that acts on a vector to produce a new vector . This is analogous to how a function  acts on the number to produce the output . This new perspective on a matrix is called a transformation , and it is a generalization of a real-valued function , developed in pre-calculus. A real-valued function has a single real number input and a single real number output. A transformation has an real number inputs (a vector in ), and an real number output (a vector in ).   Transformations  A transformation (or mapping ) form to is a rule which assigns to each vector a vector in .  The set is called the domain of (more generally, a subset of , denoted by ), and is called the codomain of  For , the vector is called the image of .  The range of is the set of all images .    The term transformation or mapping is used, however the concept is basically the same as the familiar function.  Intuitively, a transformation can be understood in terms of the movement of mapping one vector to another. More generally, maps its domain to its range, and this can be thought of as moving all possible input vectors to their corresponding output vectors. In particular, in can be thought of as a transformation in the sense of geometry, a way of changing the shape of some objects in some way (translation, rotation, stretching, expansion and compression, etc.).  If is an matrix, then matrix multiplication by is a transformation. In particular, the map is a transformation from to .    Linear Transformations  In linear algebra, we only consider transformations with a particular linear property, called linear transformations . Recall that if is an matrix, and , then,   These properties together make matrix multiplication a so-called linear transformation.  A transformation is linear if,  for all .  for all .    Intuitively, property 2 means that if you scale the input by a factor of , then the output will be correspondingly scaled by .  Linear transformations are said to be operation preserving , in particular preserving the operations of addition and scalar multiplication. This is because for a linear map, adding in and then applying is equivalent to applying to and and then adding their result in .  With this definition, every matrix transformation is a linear transformation.   Maps 0 to 0  If is a linear transformation, then .   By linearity, .  Geometrically, a transformation is linear if it maps all (straight) lines to lines, and fixes the origin. Linear transformations have the property that grid lines remain parallel and evenly spaced.   General linear property  Let be a linear transformation, . Then,   More compactly,     "
},
{
  "id": "definition-43",
  "level": "2",
  "url": "section-ITLT.html#definition-43",
  "type": "Definition",
  "number": "5.2.1",
  "title": "",
  "body": "A transformation (or mapping ) form to is a rule which assigns to each vector a vector in .  The set is called the domain of (more generally, a subset of , denoted by ), and is called the codomain of  For , the vector is called the image of .  The range of is the set of all images .   "
},
{
  "id": "definition-44",
  "level": "2",
  "url": "section-ITLT.html#definition-44",
  "type": "Definition",
  "number": "5.2.2",
  "title": "",
  "body": "A transformation is linear if,  for all .  for all .   "
},
{
  "id": "p-371",
  "level": "2",
  "url": "section-ITLT.html#p-371",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "operation preserving "
},
{
  "id": "theorem-24",
  "level": "2",
  "url": "section-ITLT.html#theorem-24",
  "type": "Theorem",
  "number": "5.2.3",
  "title": "Maps 0 to 0.",
  "body": " Maps 0 to 0  If is a linear transformation, then .  "
},
{
  "id": "proof-9",
  "level": "2",
  "url": "section-ITLT.html#proof-9",
  "type": "Proof",
  "number": "5.2.2.1",
  "title": "",
  "body": "By linearity, . "
},
{
  "id": "theorem-25",
  "level": "2",
  "url": "section-ITLT.html#theorem-25",
  "type": "Theorem",
  "number": "5.2.4",
  "title": "General linear property.",
  "body": " General linear property  Let be a linear transformation, . Then,   More compactly,   "
},
{
  "id": "section-MALT",
  "level": "1",
  "url": "section-MALT.html",
  "type": "Section",
  "number": "5.3",
  "title": "Matrices and Linear Transformations",
  "body": " Matrices and Linear Transformations   Recall that every matrix transformation is a linear transformation. It turns out that also, every linear transformation from to can be written as a matrix transformation. In other words, every linear transformation can be written in the form for some matrix . Intuitively, the matrix is the numerical formula which allows for concrete computation of the images .    Linear Transformations and Matrices  Consider a linear transformation in the plane, . Recall that any vector can be written in terms of the standard basis vectors , as,   Then, consider the image of under ,   By linearity, this is equivalent to,   Thus, if we know the images of the standard basis vectors and , we can determine the image of any arbitrary vector . In this way, the transformation is completely determined by the two images and . Intuitively, if you know and , then you know .  Further, the transformation can also be written as a matrix-vector product,   Here, the matrix has two columns, given by the images of the vectors and . If we denote this matrix by , then the equation becomes,   That is, we have written as a matrix transformation. Notice that the matrix only depends on the transformation , and not on the input vector .  This can be generalized to a linear transformation .   Matrix representation of a linear transformation  Let be a linear transformation. Then, there exists a unique matrix such that,   Further, is precisely the matrix whose th column is given by , where is the th column of the identity matrix. In other words,   The matrix is called the standard matrix for the linear transformation .   In this way, matrices provide a numerical language for understanding linear transformations. Intuitively, the term linear transformation focusses on the properties of the mapping, whereas matrix transformation describes how the mapping is implemented.  For , Then,     Linear Transformations and Linear Systems  The framework of linear transformation provides yet another perspective on linear systems.  Consider the linear system, In matrix form, this is, Then, viewing as a linear transformation (from to ), the problem of solving this linear system is equivalent to asking which vector does the transformation  map to the vector . In this case, solving the system gives the unique solution of , which means that the single vector is mapped to .  Consider the system, In matrix form, Then, the coefficient matrix is a linear transformation from to , and solving the system amounts to finding all vectors in which are mapped to . The augmented matrix is, which has RREF, Thus, , can be treated as a free variable, and then . Thus, the solution in parametric form is, In vector form, this means that any vector of the form, where , is a solution of the system. A useful interpretation is to split this vector up into the parts which vary (depending on ) and that which is constant,    "
},
{
  "id": "theorem-26",
  "level": "2",
  "url": "section-MALT.html#theorem-26",
  "type": "Theorem",
  "number": "5.3.1",
  "title": "Matrix representation of a linear transformation.",
  "body": " Matrix representation of a linear transformation  Let be a linear transformation. Then, there exists a unique matrix such that,   Further, is precisely the matrix whose th column is given by , where is the th column of the identity matrix. In other words,   The matrix is called the standard matrix for the linear transformation .  "
},
{
  "id": "proof-10",
  "level": "2",
  "url": "section-MALT.html#proof-10",
  "type": "Proof",
  "number": "5.3.1.1",
  "title": "",
  "body": "For , Then,  "
},
{
  "id": "example-18",
  "level": "2",
  "url": "section-MALT.html#example-18",
  "type": "Example",
  "number": "5.3.2",
  "title": "",
  "body": "Consider the linear system, In matrix form, this is, Then, viewing as a linear transformation (from to ), the problem of solving this linear system is equivalent to asking which vector does the transformation  map to the vector . In this case, solving the system gives the unique solution of , which means that the single vector is mapped to . "
},
{
  "id": "example-19",
  "level": "2",
  "url": "section-MALT.html#example-19",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": "Consider the system, In matrix form, Then, the coefficient matrix is a linear transformation from to , and solving the system amounts to finding all vectors in which are mapped to . The augmented matrix is, which has RREF, Thus, , can be treated as a free variable, and then . Thus, the solution in parametric form is, In vector form, this means that any vector of the form, where , is a solution of the system. A useful interpretation is to split this vector up into the parts which vary (depending on ) and that which is constant,  "
},
{
  "id": "section-LTITP",
  "level": "1",
  "url": "section-LTITP.html",
  "type": "Section",
  "number": "5.4",
  "title": "Linear Transformations in the Plane",
  "body": " Linear Transformations in the Plane   Linear Transformations in the Plane  Transformations from to are transformations of the plane, and so correspond to transformations of vectors in the plane. They are represented by matrices, of the form,   For various values of . The linear transformation is completely determined by these numbers. Then, a vector is transformed by,    Identity transformation  The most basic transformation is the identity transformation, which does not change any vector. That is, for every . To determine the matrix of this transformation, consider the images . Of course, we should have,  Thus, the matrix of is, which is the identity matrix. This is pretty intuitive.  For example, the matrix transformation,     Reflections  Consider reflections over various lines in the plane. First, consider reflection over the -axis. You may recall from pre-calculus that reflection a point over the -axis corresponds to the transformation . That is, the -coordinate is unchanged, and the -coordinate is negated. Thus, the matrix of this transformation satisfies,  Multiplying out the left-hand side gives the requirement that,  For this equality to be true for all and , clearly we need . Thus, the matrix is given by,   From a more systematic perspective, we can derive this matrix from the images of the basis vectors. We want this transformation to have the property that,   That is, (it is unchanged), and . Thus, the matrix for this transformation is,   and indeed,   In a similar way, reflection over the -axis corresponds to the transformation , and has the property that,  Thus, it has matrix,   Reflection over  Consider the transformation of reflection over the line . From pre-calculus, you may recall this corresponds to the inverse of a function or relation, and corresponds to the transformation (swapping and ). Then, the matrix transformation satisfies,   Equating entries, we see that . Thus, the matrix is,   From the basis vector image approach, we know that reflection over requires that,  which gives the same result.   Reflection over  Consider the transformation of reflection over the line . Graphically, from some examples, you might deduce that the transformation is . From the basis vector image approach, we need,   Thus, the matrix is given by,    In summary,  Some reflection transformations include,     Stretching (Contraction\/Expansion) and Dilation   Expansion and contraction Consider the horizontal transformation which multiplies the -coordinate by a scalar . If , this is called a horizontal expansion , and if , then this is called a contraction . In terms of matrices, this corresponds to the matrix, Similarly, vertical expansion and contraction is the transformation for , and is given by,    Dilations  There is another kind of stretch which can be described as a radial stretch, where length are expanded or contracted from the origin. This corresponds to the transformation for some . This is called a dilation if , and a contraction if . In vector form, this is the transformation , corresponding to scalar multiplication by . As a matrix, this corresponds to the matrix,   For example, the matrix  corresponds to dilaton by a factor of 2. Notice that,  Notice that dilations are just two consecutive identical stretches, one by horizontally and another by vertically. In matrix form,     Non-uniform dilations  In addition, we can consider non-uniform dilations , where one axis is stretched more than the other, say by a factor of in the -direction and in the -direction. This corresponds to the matrix,   Again, this is equivalent to the two stretches,       Rotation Transformations  Consider the transformation which rotates a point about the origin. First, consider counter-clockwise rotation, and first consider a counter-clockwise rotation. If you sketch a graph of this transformation for a vector in QI, you can infer that the transformation is . For vectors in the other 3 quadrants, it is a bit more subtle.  Equating entries, we get that , and so the matrix is,  From the basis vector image approach, consider the images of the basis vectors. We see that,  which gives the same result. Rotation clockwise (equivalently, counter-clockwise) is similar. The transformation is , and the images of the basis vectors are,  and so the matrix is, Indeed, Next, consider rotation by (either counter-clockwise or clockwise). Intuitively, by sketching the graph of the transformation of a vector , we can expect that this corresponds to . and so has matrix, Indeed,  In summary,   The matrices for some rotations include,   Note that like the convention in trigonometry, rotations are by default counter-clockwise. Of course, is the identity transformation.   General Rotations  Previously, we consided rotations for , and . Next, consider a more general angle. Consider rotation by an angle counter-clockwise. To determine the matrix of this transformation, we need to determine its image of the basis vectors. Consider . Its terminal point is on the unit circle, and any rotation of will also be on the unit circle. Since lies on the positive -axis, almost by definition, the resulting point after rotation counter-clockwise by will be the point . Thus,   For , the rotation by takes it to a point on the unit circle corresponding to an angle of . Thus,  By some basic trigonometric identities, and . Thus,  Putting things together, in summary, ,   The rotation transformation  for rotation by an angle counter-clockwise has matrix given by,    Notice that substituting the particular values of , etc. result in the previously developed rotation matrices.    Linear Transformations Revisited  The matrix form of a transformation allows us to use matrix multiplication to compose transformations together. Recall that,   That is, the matrix for performing the transformation followed by the transformation is equivalent to the single transformation . From one perspective, was defined precisely so that that relation holds.   You may recall this from pre-calculus the definition of an odd function, which is a function such that . Graphically, an odd function has rotational symmetry about the origin, in that rotating its graph about the origin results in the same graph. You may also recall that the transformation from to represents a reflection over the -axis and then reflection over the -axis. So, equivalently, an odd function is one such that reflecting its graph over both the -axis and then the -axis results in the same graph.  In the language of transformations, this is because rotation by about the origin is an equivalent transformation as the composition of two reflections. In the language of matrix transformations, this corresponds to the matrix product,      Glide Reflection  Glide reflection is a reflection and a translation.   "
},
{
  "id": "example-20",
  "level": "2",
  "url": "section-LTITP.html#example-20",
  "type": "Example",
  "number": "5.4.1",
  "title": "Identity transformation.",
  "body": " Identity transformation  The most basic transformation is the identity transformation, which does not change any vector. That is, for every . To determine the matrix of this transformation, consider the images . Of course, we should have,  Thus, the matrix of is, which is the identity matrix. This is pretty intuitive. "
},
{
  "id": "example-21",
  "level": "2",
  "url": "section-LTITP.html#example-21",
  "type": "Example",
  "number": "5.4.2",
  "title": "",
  "body": "For example, the matrix transformation,  "
},
{
  "id": "example-22",
  "level": "2",
  "url": "section-LTITP.html#example-22",
  "type": "Example",
  "number": "5.4.3",
  "title": "Reflection over <span class=\"process-math\">\\(y = x\\)<\/span>.",
  "body": " Reflection over  Consider the transformation of reflection over the line . From pre-calculus, you may recall this corresponds to the inverse of a function or relation, and corresponds to the transformation (swapping and ). Then, the matrix transformation satisfies,   Equating entries, we see that . Thus, the matrix is,   From the basis vector image approach, we know that reflection over requires that,  which gives the same result. "
},
{
  "id": "example-23",
  "level": "2",
  "url": "section-LTITP.html#example-23",
  "type": "Example",
  "number": "5.4.4",
  "title": "Reflection over <span class=\"process-math\">\\(y = -x\\)<\/span>.",
  "body": " Reflection over  Consider the transformation of reflection over the line . Graphically, from some examples, you might deduce that the transformation is . From the basis vector image approach, we need,   Thus, the matrix is given by,   "
},
{
  "id": "theorem-27",
  "level": "2",
  "url": "section-LTITP.html#theorem-27",
  "type": "Theorem",
  "number": "5.4.5",
  "title": "",
  "body": "Some reflection transformations include,  "
},
{
  "id": "example-24",
  "level": "2",
  "url": "section-LTITP.html#example-24",
  "type": "Example",
  "number": "5.4.6",
  "title": "Expansion and contraction.",
  "body": " Expansion and contraction Consider the horizontal transformation which multiplies the -coordinate by a scalar . If , this is called a horizontal expansion , and if , then this is called a contraction . In terms of matrices, this corresponds to the matrix, Similarly, vertical expansion and contraction is the transformation for , and is given by,  "
},
{
  "id": "example-25",
  "level": "2",
  "url": "section-LTITP.html#example-25",
  "type": "Example",
  "number": "5.4.7",
  "title": "Dilations.",
  "body": " Dilations  There is another kind of stretch which can be described as a radial stretch, where length are expanded or contracted from the origin. This corresponds to the transformation for some . This is called a dilation if , and a contraction if . In vector form, this is the transformation , corresponding to scalar multiplication by . As a matrix, this corresponds to the matrix,   For example, the matrix  corresponds to dilaton by a factor of 2. Notice that,  Notice that dilations are just two consecutive identical stretches, one by horizontally and another by vertically. In matrix form,   "
},
{
  "id": "example-26",
  "level": "2",
  "url": "section-LTITP.html#example-26",
  "type": "Example",
  "number": "5.4.8",
  "title": "Non-uniform dilations.",
  "body": " Non-uniform dilations  In addition, we can consider non-uniform dilations , where one axis is stretched more than the other, say by a factor of in the -direction and in the -direction. This corresponds to the matrix,   Again, this is equivalent to the two stretches,   "
},
{
  "id": "theorem-28",
  "level": "2",
  "url": "section-LTITP.html#theorem-28",
  "type": "Theorem",
  "number": "5.4.9",
  "title": "",
  "body": " The matrices for some rotations include,   "
},
{
  "id": "theorem-29",
  "level": "2",
  "url": "section-LTITP.html#theorem-29",
  "type": "Theorem",
  "number": "5.4.10",
  "title": "",
  "body": " The rotation transformation  for rotation by an angle counter-clockwise has matrix given by,   "
},
{
  "id": "example-27",
  "level": "2",
  "url": "section-LTITP.html#example-27",
  "type": "Example",
  "number": "5.4.11",
  "title": "",
  "body": " You may recall this from pre-calculus the definition of an odd function, which is a function such that . Graphically, an odd function has rotational symmetry about the origin, in that rotating its graph about the origin results in the same graph. You may also recall that the transformation from to represents a reflection over the -axis and then reflection over the -axis. So, equivalently, an odd function is one such that reflecting its graph over both the -axis and then the -axis results in the same graph.  In the language of transformations, this is because rotation by about the origin is an equivalent transformation as the composition of two reflections. In the language of matrix transformations, this corresponds to the matrix product,   "
},
{
  "id": "section-MM",
  "level": "1",
  "url": "section-MM.html",
  "type": "Section",
  "number": "5.5",
  "title": "Matrix Multiplication",
  "body": " Matrix Multiplication   Addition and scalar multiplication of matrices is defined in the intuitively natural way, entry-wise. However, there is another operation which is not defined in this natural way. That is, multiplying two matrices, or matrix multiplication , is not computed entry-wise. This will be a generalization of the matrix-vector product.    Matrix Multiplication  Consider a matrix . If is multipled to a vector , this transforms into the vector . Then, if this vector is then multiplied by another matrix , the resulting vector is .  The vector is produced from by a composition of transformations. Then, we define to be a matrix which represents this single composite transformation produced by applying and then .  Let be an matrix, and be an matrix. Let the columns of be , and let be a vector in . Then, first consider the matrix-vector product ,  Then, consider , Here, is being applied to a linear combination of , with weights . So, by linearity, this is equivalent to,  In other words, the vector is the linear combination of , with the entries of as weights. In matrix notation,   Thus, the matrix is precisely the matrix which transforms into , which we want to denote by .   Let be an matrix, be an matrix with columns . Then, the product  is the matrix with columns , or,    This definition for matrix multiplication makes the equation true. That is, is the single transformation that is equvialent to applying first, and then . In this way, multiplication of matrices corresponds to composition of linear transformations.  This definition also emhasizes that the column of are given by the matrix-vector products . In some sense, matrix multiplication is a generalization of the matrix-vector product.    Matrix Multiplication as a Dot Product (Entry-by-Entry)  Another perspective on matrix multiplication views it entry-by-entry, and involves a dot product of a column and a row.   Let . Then,   Notice that the entries of this product of matrices has the form of a dot product of vectors within the original two matrices. For example, the -entry is the dot product of with , the 1st row of and the 1st column of , respectively.   More generally, the -entry of is the dot product of the th row of and the the column of . In other words,     Row Perspective of the Matrix-Vector Product and Matrix Multiplication  There is another characterization of the matrix-vector product, and matrix multiplication, from the perspective of the rows of the matrix, and in particular a linear combination of the rows. Let be an matrix. Recall that (where ) can be thought of as a linear combination of the columns of with weights given by the entries of . In a similar way, the product (where ) can be thought of as a linear combination of the rows of , with weights given by the entries of .  More precisely, let , and let denote the th row of , so   Note that we haven't defined vector powers, so this is not ambiguous. Then,   for which the result is again a row vector.   For example,    Then, this leads to a characterization of matrix multiplication. Let be an matrix. Then,   That is, each row of is a linear combination of the rows of , with weights given by the correspondsing row of . In particular, the th row of is a linear combination of the rows of with weights given by the entries of the th row of .   For example,      Properties of Matrix Multiplication  Matrix multiplication shares many properties of real number multiplication, assuming the matrices have the appropriate dimensions.   Let be an matrix, and be matrices, and be matrices, be a scalar. Then,   Multiplication distributes over addition .  Associative with scalar multiplication .  Associative with matrix multiplication .    Intuitively, these properties mean that parentheses surrounding matrix expressions generally work the same as for real numbers.  The associative property is very intuitive through the language of transformations. It says that applying the composition and then , is the same as applying , then the composition . Both of these are by definition equiavlent to applying , then , then .  The numerical proofs for these properties for an arbitrary matrix can be tedious and symbol-heavy.    Proof of 1. entry-wise .   Proof of 3. for matrices. Let . Then, Also, Comparing these expressions entry-by-entry shows that they are equal.      Matrix Multiplication is Not Commutative  While matrix multiplication shares many properties of real number multiplication, it differs by an important property. That is, matrix multiplication is not commutative, in that in general,   Viewing and as transformations, it is clear that the composition applying first, and then , will not be the same as applying first, and then . You may recall the more specific property holds for functions, that is, for real-valued functions , . That is, the non-commutativity of matrix multiplication is a consequence of the more general fact that transformation composition is not commutative.  In fact, viewing and as matrices, suppose say is an matrix, and is an matrix. Then, the product is defined. However, the product is not even defined in general, unless . Further, even if , the product will have dimensions , while the product will have dimensions , and so and cannot even possibly be the same matrix, unless . In this special case, where and , and are both square matrices, say . Even in this particular case, the entries of and are not all the same in general, that is, .  More concretely, is a linear combination of the columns of , whereas is a linear combination of the columns of , and there is no reason to expect these to be equal.  Then, in the product , we sometimes say is right-multiplied by , or is left-multiplied by .    The Identity Matrix  The identity matrix for the matrix-vector product plays an identical role in the multiplciation of matrices. Recall that the identity matrix is denoted by and has 1's along its main diagonal (from top left to bottom right) and 0's everywhere else,   This matrix has the property that for any matrix ,   For example, you can verify that,     Matrix Operations with Matrices  The arithmetic of matrices can be more deeply understood by considering the simplest possible case, of arithemtic with matrices. A general matrix is of the form . Then, addition and scalar multiplication are defined as,   All of these computations follows from the more general definitions presented previously. Notice that the operations of matrices are essentially analogously to the operations of real numbers. That is, can be identified with real numbers.  Then, and larger matrices can be thought of as generalized numbers .    Matrix Multiplication by Blocks (Partitioned Matrices)   "
},
{
  "id": "definition-45",
  "level": "2",
  "url": "section-MM.html#definition-45",
  "type": "Definition",
  "number": "5.5.1",
  "title": "",
  "body": " Let be an matrix, be an matrix with columns . Then, the product  is the matrix with columns , or,   "
},
{
  "id": "example-28",
  "level": "2",
  "url": "section-MM.html#example-28",
  "type": "Example",
  "number": "5.5.2",
  "title": "",
  "body": " Let . Then,   Notice that the entries of this product of matrices has the form of a dot product of vectors within the original two matrices. For example, the -entry is the dot product of with , the 1st row of and the 1st column of , respectively.  "
},
{
  "id": "example-29",
  "level": "2",
  "url": "section-MM.html#example-29",
  "type": "Example",
  "number": "5.5.3",
  "title": "",
  "body": " For example,   "
},
{
  "id": "example-30",
  "level": "2",
  "url": "section-MM.html#example-30",
  "type": "Example",
  "number": "5.5.4",
  "title": "",
  "body": " For example,   "
},
{
  "id": "theorem-30",
  "level": "2",
  "url": "section-MM.html#theorem-30",
  "type": "Theorem",
  "number": "5.5.5",
  "title": "",
  "body": " Let be an matrix, and be matrices, and be matrices, be a scalar. Then,   Multiplication distributes over addition .  Associative with scalar multiplication .  Associative with matrix multiplication .   "
},
{
  "id": "proof-11",
  "level": "2",
  "url": "section-MM.html#proof-11",
  "type": "Proof",
  "number": "5.5.4.1",
  "title": "",
  "body": "  Proof of 1. entry-wise .   Proof of 3. for matrices. Let . Then, Also, Comparing these expressions entry-by-entry shows that they are equal.   "
},
{
  "id": "p-456",
  "level": "2",
  "url": "section-MM.html#p-456",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right-multiplied left-multiplied "
},
{
  "id": "example-31",
  "level": "2",
  "url": "section-MM.html#example-31",
  "type": "Example",
  "number": "5.5.6",
  "title": "",
  "body": "For example, you can verify that,  "
},
{
  "id": "section-EM",
  "level": "1",
  "url": "section-EM.html",
  "type": "Section",
  "number": "5.6",
  "title": "Elementary Matrices",
  "body": " Elementary Matrices  Row reduction and elimination can be alternatively characterized in terms of matrix multiplication. In particular, performing row reduction on a matrix is equivalent to multiplying by particular matrices, called elementary matrices .   Elementary Matrices  Using the row perspective on matrix multiplication, we can characterize the elementary row operation as multiplication by a matrix.  Consider the case of a matrix,   To multiply the top row by a scalar , we can multiply by the matrix,  From the row perspective, the first row means that the first row of the product involving taking times the first row of , and times the second row of . Similarly,  To interchange the two rows, again consider the matrix,   Again, from the row perspective, the first row means taking 0 of the first row and 1 of the second row, to get .  For row replacement, that is, adding to one row a multiple of another row, again we use a linear combination. Suppose we want to add to . In other words, . Then,   These patterns and reasoning with row combinations generalize to arbitrary matrices. The idea is, the effect of a single row operation can be captured by left-multiplication by a matrix which is a slightly modified version of the identity matrix. In particular, the matrix that represents a particular elementary row operation is found by performing the same row operation on the identity matrix.  An elementary matrix is a matrix which is obtained by performing a single elementary row operation on an identity matrix.   Let be an matrix. If an elementary row operation is performed on , the resulting matrix can be written as for an elementary matrix formed by performing the same row operation on .   In other words, every elementary row operation corresponds to left-multiplication by some elementary matrix.  In addition, every elementary matrix is invertible, intuitively because row operations are reversable. If corresponds to some row operation, then the reverse operation has a corresponding elementary matrix such that .  In summary,   Every elementary matrix is invertible, and the inverse of is the elementary matrix of the same type as which transforms back into .     Permutation Matrices for Row Exchanges  The elementary matrices for row exchanges are the identity matrix with two row exchanged. For example, for matrices, there are 2 rows, so there is only 1 possible row exchange, represented by the matrix,   For matrices, there are 3 rows, and so possible pairs of rows to exchange ( , and ), represented by the matrices,   In general, among matrices, there are permutation matrices.   "
},
{
  "id": "definition-46",
  "level": "2",
  "url": "section-EM.html#definition-46",
  "type": "Definition",
  "number": "5.6.1",
  "title": "",
  "body": "An elementary matrix is a matrix which is obtained by performing a single elementary row operation on an identity matrix. "
},
{
  "id": "theorem-31",
  "level": "2",
  "url": "section-EM.html#theorem-31",
  "type": "Theorem",
  "number": "5.6.2",
  "title": "",
  "body": " Let be an matrix. If an elementary row operation is performed on , the resulting matrix can be written as for an elementary matrix formed by performing the same row operation on .  "
},
{
  "id": "theorem-32",
  "level": "2",
  "url": "section-EM.html#theorem-32",
  "type": "Theorem",
  "number": "5.6.3",
  "title": "",
  "body": " Every elementary matrix is invertible, and the inverse of is the elementary matrix of the same type as which transforms back into .  "
},
{
  "id": "section-IOAM",
  "level": "1",
  "url": "section-IOAM.html",
  "type": "Section",
  "number": "5.7",
  "title": "Inverse of a Matrix",
  "body": " Inverse of a Matrix   Recall that for real numbers, the inverse (or multiplicative inverse , or reciprocal of is the number such that ab = 1 . We denote by or . For example, the multiplicative inverse of is , because . Also, inverses only exist for non-zero real numbers.  For matrices, we can define an analogous notion of inverse. However, unlike real number multiplication, matrix multiplication is not commutative. Further, for both sides of the product to be defined, the matrices involved must be square. So, most often, we focus on inverses of square matrices. Also, similarly, the inverse of a matrix will only exist if the matrix is non-zero in some sense.    Inverse of a Square Matrix  An square matrix is invertible if there exists an matrix such that . Then, is called the inverse of , and is denoted by .    If a square matrix is invertible, then its inverse is unique.   If and are both inverses of , then and . Then, Thus, .  Thus, the inverse of a matrix , if it exists, is well-defined, and so is denoted by . It has the property that,   A matrix which is not invertible is sometimes called singular , and a matrix which is invertible is called non-singular .  To verify that matrix is the inverse of , we can multiply by and verify that the result is the identity matrix. Further, for a square matrix , if and only if , so it is sufficient to only compute one of the two products or .   Let be square matrices. Then, if and only if .    EXERCISE.     Matrix Inverses and Linear Transformations  Considering a matrix as a linear transformation, its inverse is the inverse linear transformation in the sense of the inverse of a function. That is, its composition with results in the identity transformation. This is quite literally encoded in the definition . In the language of linear transformations (or functions), the inverse is the linear transformation such that for every vector ,   The parentheses are to emphasize the function composition.    Computing the Inverse of a Matrix ( and Cases)  The next natural question is: how do you compute the inverse of a matrix? It turns out that it is non-trivial, especially for large matrices. First, start with the simplest case, of a matrix . We want to find the matrix such that,   In other words, . Clearly, the entry should be , provided that . Thus,   and is invertible if and only if .  Next, consider a matrix, of the form . We want to find a matrix, say of the form , such that,   By the definition of matrix multiplication, this is equivalent to,   Equating entries, this is equivalent to the system of 4 equations,   That is, finding the inverse of a matrix is equivalent to solving this system of 4 equations in 4 unknowns. The augmented matrix is,   Converting this matrix to RREF,   provided that . Thus, the inverse matrix is,   In summary,   Inverse of matrix  Let be a matrix. If , then is invertible, and its inverse is given by,    Intuitively, is obtained from by exchanging the diagonal entries, negating the off-diagonal entries, and dividing by .   The previously explained steps could be considered a derivation , but a proof of this formula only requires that we verify that using matrix multiplication. Indeed,    If , then the matrix does not have an inverse.    Solving Systems with Inverse Matrices  Inverse matrices also provide a conceptually intuitive method of solving a linear system . If the coefficient matrix is invertible, then multiplying both sides of the equation on the left by , we can solve for ,   Thus, is the unique solution to the equation. This leads to the following theorem.   Let be an matrix. If is invertible, then the matrix equation has a unique soloution (for any ), given by the vector .   Intuitively, the uniqueness follows from the fact that matrix inverses are unique.  First, indeed is a solution, as so it indeed satisfies the equation. For uniqueness, let be any solution, so that . Then, multiplying on the left by , , or , and so .  However, the formula is is rarely used in practice to solve a system of equations. This is because, especially for large systems, computing inverses is very time-consuming. The alternative method of row reduction is much faster. A possible exception is for systems of two equations in two unknowns.  Instead, the importance of this theorem is conceptual, because it provides the condition of invertibility that guarentees a unique solution.   Recall that previously, we solved the system, In matrix form, which has a unique solution, provided that . Notice that this unique solution is the product of the inverse of and the constant vector,     Inverses of Larger Matrices  The reasoning used to determine the inverse of a matrix involved solving a linear system with 4 equations and 4 variables. Using a slightly different perspective, it can be discovered how to generalize this reasoning to higher dimensions.  Again, consider the matrix equation,   where the variables are . If we consider the perspective of multiplication as linear combinations of the columns of , the product on the left-hand side is,   So, the matrix equation requries that,   These are two linear systems, each with two equations and two unknowns each, and corresponding augmented matrices,   At first, this seems just as complicated as a single system with 4 equations and 4 unknowns. However, the insight is that the coefficient matrix for the systems are the same. Thus, the elementary row operations used to solve one system will be the same as that used to solve the other. In this way, we can augment the systems together, and work with the augmented matrix,   That is, . Then, after performing row reduction, the resulting matrix should be of the form,   Then, the entries of will be precisely the entires on the right-hand side of the augmented matrix. If turns out to be not invertible (in the case, if ), then the left-hand side of the augmented matrix will not reduce to , but instead have some zero rows, indicating that the system of equations used to find the inverse doesn't have a solution.  All of the previous reasoning applies to general matrix . If the inverse is say , then in this case, the equation is equivalent to the linear systems,   each with equations and unknowns. These systems can be combined and solved together, by row reducing the augmented matrix formed by augmented the identity matrix onto the right-hand side,   Then, if reduces to , then is the resulting matrix on the right-hand side.  In summary, we get an algorithm for computing matrix inverses, using row reduction. To find the inverse of , convert it to RREF using row reduction, and then perform the same row reduction steps (in the same order) on , and the result is . These two steps are combined by performing row reduction on the augmented matrix .   To determine the inverse of a square matrix ,   Form the augmented matrix .  Convert the augmented matrix to RREF using Gauss-Jordan elimination.  If is row equivalent to , then the augmented matrix in RREF will be of the form . Then, is the inverse.  Otherwise, if is not row equivalent to , then does not have an inverse.    In short,   After using this procedure, the result can be verified by checking that .  This procedure is a fast method for determining the inverse of a matrix, especially for large matrices. This is because it essentially just involves row reduction.    Matrix Inverses and Elementary Matrices  The previous reasoning can be generalized and made more precise using elementary matrices.  Suppose that , that is, there is a sequence of elementary row operations that converts to . In other words, there are a sequence of elementary matrices (say there are steps) such that,  In other words, In other words, the matrix multiplies with to produce the identity matrix. Thus, by definition, . In other words, is formed by multiplying the sequence of elementary matrices used to convert to . This is equivalently , i.e. is obtained by applying the row operations successively to , in the same sequence requried to transform to .  In fact, the converse is also true. If is invertible, then is row equivalent to . In summary,   Invertible if and only if row equivalent to the identity matrix  An matrix is invertible if and only if is row equivalent to , and in this case, any sequence of row operations that reduces to also transforms into .    If is invertible, then the equation has a solution for every , and has a pivot position in every row ( rows). Since is square (in particular has columns), this implies that the pivot positions are on the main diagonal. Thus, the RREF of is , or .     Inverse of a Matrix  The explicit formula for a matrix is more difficult to determine. Consider a matrix ,   Using the process of row reduction on a matrix, the formula turns out to be,   Derivation (FINISH).    where,   Then, is invertible if and only if . This explicit formula is not to be memorized. There are many patterns in the entries of this matrix, but the full insight can only be understood after considering the later topic of determinants.    Properties of Inverse Matrices   If is invertible, then is invertible, and the inverse of is , or    By definition, the inverse of is the matrix such that . Clearly, satisfies this, as .   Inverse of a product  If are invertible matrices, then their product is invertible, and the inverse of is the product of the inverses of and in reverse order. In other words,     Thus, .  Intuitively, considering matrices as linear transformations, this statement follow from the fact that the inverse of a composition of functions is the composition of the inverse functions in reverse order, or .  This property can be generalized,   Generalized inverse of a product  If are invertible matrices, then their product is invertible, and the inverse is the product of their inverses in reverse order,     Intuitively, the inverses will cancel out from inside out,   A more precise argument uses mathematical induction.     In Python, implement a program to compute the inverse of an arbitrary square matrix, using row reduction.   "
},
{
  "id": "definition-47",
  "level": "2",
  "url": "section-IOAM.html#definition-47",
  "type": "Definition",
  "number": "5.7.1",
  "title": "",
  "body": "An square matrix is invertible if there exists an matrix such that . Then, is called the inverse of , and is denoted by . "
},
{
  "id": "theorem-33",
  "level": "2",
  "url": "section-IOAM.html#theorem-33",
  "type": "Theorem",
  "number": "5.7.2",
  "title": "",
  "body": " If a square matrix is invertible, then its inverse is unique.  "
},
{
  "id": "proof-12",
  "level": "2",
  "url": "section-IOAM.html#proof-12",
  "type": "Proof",
  "number": "5.7.1.1",
  "title": "",
  "body": "If and are both inverses of , then and . Then, Thus, . "
},
{
  "id": "p-481",
  "level": "2",
  "url": "section-IOAM.html#p-481",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "singular non-singular "
},
{
  "id": "theorem-34",
  "level": "2",
  "url": "section-IOAM.html#theorem-34",
  "type": "Theorem",
  "number": "5.7.3",
  "title": "",
  "body": " Let be square matrices. Then, if and only if .  "
},
{
  "id": "proof-13",
  "level": "2",
  "url": "section-IOAM.html#proof-13",
  "type": "Proof",
  "number": "5.7.1.2",
  "title": "",
  "body": " EXERCISE.  "
},
{
  "id": "theorem-35",
  "level": "2",
  "url": "section-IOAM.html#theorem-35",
  "type": "Theorem",
  "number": "5.7.4",
  "title": "Inverse of <span class=\"process-math\">\\(2 \\times 2\\)<\/span> matrix.",
  "body": " Inverse of matrix  Let be a matrix. If , then is invertible, and its inverse is given by,   "
},
{
  "id": "proof-14",
  "level": "2",
  "url": "section-IOAM.html#proof-14",
  "type": "Proof",
  "number": "5.7.3.1",
  "title": "",
  "body": " The previously explained steps could be considered a derivation , but a proof of this formula only requires that we verify that using matrix multiplication. Indeed,   "
},
{
  "id": "theorem-36",
  "level": "2",
  "url": "section-IOAM.html#theorem-36",
  "type": "Theorem",
  "number": "5.7.5",
  "title": "",
  "body": " Let be an matrix. If is invertible, then the matrix equation has a unique soloution (for any ), given by the vector .  "
},
{
  "id": "proof-15",
  "level": "2",
  "url": "section-IOAM.html#proof-15",
  "type": "Proof",
  "number": "5.7.4.1",
  "title": "",
  "body": "First, indeed is a solution, as so it indeed satisfies the equation. For uniqueness, let be any solution, so that . Then, multiplying on the left by , , or , and so . "
},
{
  "id": "example-32",
  "level": "2",
  "url": "section-IOAM.html#example-32",
  "type": "Example",
  "number": "5.7.6",
  "title": "",
  "body": "Recall that previously, we solved the system, In matrix form, which has a unique solution, provided that . Notice that this unique solution is the product of the inverse of and the constant vector,  "
},
{
  "id": "theorem-37",
  "level": "2",
  "url": "section-IOAM.html#theorem-37",
  "type": "Theorem",
  "number": "5.7.7",
  "title": "",
  "body": " To determine the inverse of a square matrix ,   Form the augmented matrix .  Convert the augmented matrix to RREF using Gauss-Jordan elimination.  If is row equivalent to , then the augmented matrix in RREF will be of the form . Then, is the inverse.  Otherwise, if is not row equivalent to , then does not have an inverse.   "
},
{
  "id": "theorem-38",
  "level": "2",
  "url": "section-IOAM.html#theorem-38",
  "type": "Theorem",
  "number": "5.7.8",
  "title": "Invertible if and only if row equivalent to the identity matrix.",
  "body": " Invertible if and only if row equivalent to the identity matrix  An matrix is invertible if and only if is row equivalent to , and in this case, any sequence of row operations that reduces to also transforms into .  "
},
{
  "id": "proof-16",
  "level": "2",
  "url": "section-IOAM.html#proof-16",
  "type": "Proof",
  "number": "5.7.6.1",
  "title": "",
  "body": " If is invertible, then the equation has a solution for every , and has a pivot position in every row ( rows). Since is square (in particular has columns), this implies that the pivot positions are on the main diagonal. Thus, the RREF of is , or .  "
},
{
  "id": "example-33",
  "level": "2",
  "url": "section-IOAM.html#example-33",
  "type": "Example",
  "number": "5.7.9",
  "title": "",
  "body": " Derivation (FINISH).  "
},
{
  "id": "theorem-39",
  "level": "2",
  "url": "section-IOAM.html#theorem-39",
  "type": "Theorem",
  "number": "5.7.10",
  "title": "",
  "body": " If is invertible, then is invertible, and the inverse of is , or   "
},
{
  "id": "proof-17",
  "level": "2",
  "url": "section-IOAM.html#proof-17",
  "type": "Proof",
  "number": "5.7.8.1",
  "title": "",
  "body": "By definition, the inverse of is the matrix such that . Clearly, satisfies this, as . "
},
{
  "id": "theorem-40",
  "level": "2",
  "url": "section-IOAM.html#theorem-40",
  "type": "Theorem",
  "number": "5.7.11",
  "title": "Inverse of a product.",
  "body": " Inverse of a product  If are invertible matrices, then their product is invertible, and the inverse of is the product of the inverses of and in reverse order. In other words,   "
},
{
  "id": "proof-18",
  "level": "2",
  "url": "section-IOAM.html#proof-18",
  "type": "Proof",
  "number": "5.7.8.2",
  "title": "",
  "body": " Thus, . "
},
{
  "id": "theorem-41",
  "level": "2",
  "url": "section-IOAM.html#theorem-41",
  "type": "Theorem",
  "number": "5.7.12",
  "title": "Generalized inverse of a product.",
  "body": " Generalized inverse of a product  If are invertible matrices, then their product is invertible, and the inverse is the product of their inverses in reverse order,   "
},
{
  "id": "proof-19",
  "level": "2",
  "url": "section-IOAM.html#proof-19",
  "type": "Proof",
  "number": "5.7.8.3",
  "title": "",
  "body": " Intuitively, the inverses will cancel out from inside out,   A more precise argument uses mathematical induction.  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-IOAM.html#exercise-3",
  "type": "Exercise",
  "number": "5.7.9.1",
  "title": "",
  "body": "In Python, implement a program to compute the inverse of an arbitrary square matrix, using row reduction. "
},
{
  "id": "section-RCSCSNS",
  "level": "1",
  "url": "section-RCSCSNS.html",
  "type": "Section",
  "number": "6.1",
  "title": "Real Coordinate Spaces, Column Space and Null Space",
  "body": " Real Coordinate Spaces, Column Space and Null Space  Now, the real linear algebra. Applications of vector spaces in engineering, physics, and statistics.   Introduction to Vector Spaces  A vector space is a space of vectors. Broadly, a space is a set of objects which satisfy some specific conditions. In particular, vector spaces are sets of vectors for which we can perform the fundamental operations for vectors: addition and scalar multiplication. That is, we can take linear combinations.  Slightly more precisely, a vector space is a set of vectors for which adding any two vectors in is a vector that is also in , and the scalar multiple of any vector in is also in . In other words, adding and scaling vectors in the space stays in the space.   A vector space is a set of vectors such that,   If , then also.  If and , then also.    This property that combining objects through some operation producing another object also within the set is called closure . Then, a vector space is a set of vectors which is closed under addition and scalar multiplication. More compactly, we can say a vector space is closed under taking linear combinations .   The vector space  The set of all vectors with two real number components, is a vector space.    The vector space  The real numbers can also be considered a vector space. The sum of two real numbers is a real number, and multiplying a real number by another real number is a real number.    The vector space  More generally, is a vector space.     Subspaces  Many interesting vector spaces are subsets of other vectors spaces. This naturally leads to the concept of a vector subspace.   Let be a vector space. Then, a subset is a vector subspace of (or simply subspace ) if is itself a vector space.   For now, most of the vector spaces we encounter will be subspaces of , for some .   Subspaces of  Consider the possible subspaces of . Let be a subspace. First, notice that if is any vector, then is also in , because is closed under scalar multiplication. Thus, any subspace of must contain the zero vector. Indeed, the vector space containing only the zero vector is a vector space. This can be trivially verified, since any scalar multiple of is , and any sum of is .  Then, suppose contains any non-zero vector . Then, must also contain all scalar multiples of . Thus, must contain the line parallel to and through the origin. Indeed, this set, which is a line in , or the span of , is a vector space.   Indeed, if , then they are both scalar multiples of . Then, for some scalars . Then, is also a scalar multiple of , and so is also in . Also, for any scalar , is also a scalar multiple of , and so is in . Thus, is a vector space.  Next, suppose that contains another vector which is not parallel to , say these two vectors are now called and . Then, their span is a vector space. In this case, it makes up the entire plane .  In summary, the possible subspaces of are a single point (the origin), a line through the origin, and the entire plane.    Subspaces of  The possible subspaces of are a single point (the origin), a line through the origin, a plane through the origin, or the entire 3D space.     Spans of Vectors as a Subspace  Almost by definition, the span of vectors in is a subspace of . Let . Then, consider . For , and for some scalars . Then,   so is a linear combination of , and so . Also, for a scalar , , and so also.  More generally,  For a collection of vectors , their span is a subspace of . Then, is called the subspace spanned by  .  Conversely, if , then the subspace is spanned by .  Also, the subspace is the smallest subspace of which contains the vectors . Intuitively, if is a subspace that contains , then at minimum, must contain all of the linear combinations of these vectors. If we stop there, we form precisely the span of these vectors.    Vector Spaces of  Every vector space (and subspace) must contain the zero vector .    Intersection of Subspaces is a Subspace    The Column Space  Subspaces often arise in connection with some matrix . The two most important ways to construct subspaces are called the column space and null space, of a matrix.   The column space of a matrix is the set of all linear combinations of the column vectors of . More precisely, if is an matrix, , then the column space, denoted by , is defined by,    The column space of an matrix is a subspace of (since the column vectors are vectors in ).  Recall that is in the span of if and only if the linear system has a solution. Then, the column space is equiavlently the set of all vectors such that has a solution. Conversely, has a solution precisely when is in the column space of .    The Null Space   Let be an matrix. Then, the null space of , , is the set of all solutions to the homogeneous system . In other words, it is the set of all vectors such that , or    Certainly, the zero vector , because for any matrix .   The null space is a subspace. More precisely, if is an matrix, then is a subspace of .    Let . Then, and . Then,   and so . Also,   and so . Thus, is a subspace.   The null space is special, because for a general matrix and vector , the set of all solutions such that is not a vector space (i.e. if ). For example, because is not a solution and so is not in the solution set. Graphically, the solution set may be a line or plane which does not go through the origin.    Contrasting the Column and Null Space  The most basic difference between the column space and null space is that the column space is a set of output vectors in , whereas the null space is a set of input vectors in .  The null space is defined by specifying a condition for which its vectors must satisfy. On the other hand, the column space is defined by specifying how to construct each vector by linear combinations. For this reason, the null space is said to be defined implicitly , whereas the column space is defined explicitly .  Because the column space is defined explicitly, it is easy to construct elements of the column space, simply by specifing values for the coefficients. To determine an explicit description of , solve the homogeneous system , and write the solution set in parametric vector form. Then, recall that the solution set to a homogeneous system is always a span of vectors. Then, the null space can always be written explicitly as the span of some vectors.  On the other hand, because the null space is defined implicitly by a condition, it is easy to verify if a given vector is in the null space , simply by computing and checking whether or not it is equal to the zero vector. To determine if , we have to consider the system of equations , and determine if there is a solution or not.   "
},
{
  "id": "definition-48",
  "level": "2",
  "url": "section-RCSCSNS.html#definition-48",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": " A vector space is a set of vectors such that,   If , then also.  If and , then also.   "
},
{
  "id": "p-544",
  "level": "2",
  "url": "section-RCSCSNS.html#p-544",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "closure closed under taking linear combinations "
},
{
  "id": "example-34",
  "level": "2",
  "url": "section-RCSCSNS.html#example-34",
  "type": "Example",
  "number": "6.1.2",
  "title": "The vector space <span class=\"process-math\">\\(\\mathbb{R}^2\\)<\/span>.",
  "body": " The vector space  The set of all vectors with two real number components, is a vector space.  "
},
{
  "id": "example-35",
  "level": "2",
  "url": "section-RCSCSNS.html#example-35",
  "type": "Example",
  "number": "6.1.3",
  "title": "The vector space <span class=\"process-math\">\\(\\mathbb{R}\\)<\/span>.",
  "body": " The vector space  The real numbers can also be considered a vector space. The sum of two real numbers is a real number, and multiplying a real number by another real number is a real number.  "
},
{
  "id": "example-36",
  "level": "2",
  "url": "section-RCSCSNS.html#example-36",
  "type": "Example",
  "number": "6.1.4",
  "title": "The vector space <span class=\"process-math\">\\(\\mathbb{R}^n\\)<\/span>.",
  "body": " The vector space  More generally, is a vector space.  "
},
{
  "id": "p-549",
  "level": "2",
  "url": "section-RCSCSNS.html#p-549",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector subspace subspace "
},
{
  "id": "example-37",
  "level": "2",
  "url": "section-RCSCSNS.html#example-37",
  "type": "Example",
  "number": "6.1.5",
  "title": "Subspaces of <span class=\"process-math\">\\(\\mathbb{R}^2\\)<\/span>.",
  "body": " Subspaces of  Consider the possible subspaces of . Let be a subspace. First, notice that if is any vector, then is also in , because is closed under scalar multiplication. Thus, any subspace of must contain the zero vector. Indeed, the vector space containing only the zero vector is a vector space. This can be trivially verified, since any scalar multiple of is , and any sum of is .  Then, suppose contains any non-zero vector . Then, must also contain all scalar multiples of . Thus, must contain the line parallel to and through the origin. Indeed, this set, which is a line in , or the span of , is a vector space.   Indeed, if , then they are both scalar multiples of . Then, for some scalars . Then, is also a scalar multiple of , and so is also in . Also, for any scalar , is also a scalar multiple of , and so is in . Thus, is a vector space.  Next, suppose that contains another vector which is not parallel to , say these two vectors are now called and . Then, their span is a vector space. In this case, it makes up the entire plane .  In summary, the possible subspaces of are a single point (the origin), a line through the origin, and the entire plane.  "
},
{
  "id": "example-38",
  "level": "2",
  "url": "section-RCSCSNS.html#example-38",
  "type": "Example",
  "number": "6.1.6",
  "title": "Subspaces of <span class=\"process-math\">\\(\\mathbb{R}^3\\)<\/span>.",
  "body": " Subspaces of  The possible subspaces of are a single point (the origin), a line through the origin, a plane through the origin, or the entire 3D space.  "
},
{
  "id": "definition-49",
  "level": "2",
  "url": "section-RCSCSNS.html#definition-49",
  "type": "Definition",
  "number": "6.1.7",
  "title": "",
  "body": "For a collection of vectors , their span is a subspace of . Then, is called the subspace spanned by  . "
},
{
  "id": "p-560",
  "level": "2",
  "url": "section-RCSCSNS.html#p-560",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spanned "
},
{
  "id": "definition-50",
  "level": "2",
  "url": "section-RCSCSNS.html#definition-50",
  "type": "Definition",
  "number": "6.1.8",
  "title": "",
  "body": " The column space of a matrix is the set of all linear combinations of the column vectors of . More precisely, if is an matrix, , then the column space, denoted by , is defined by,   "
},
{
  "id": "definition-51",
  "level": "2",
  "url": "section-RCSCSNS.html#definition-51",
  "type": "Definition",
  "number": "6.1.9",
  "title": "",
  "body": " Let be an matrix. Then, the null space of , , is the set of all solutions to the homogeneous system . In other words, it is the set of all vectors such that , or   "
},
{
  "id": "theorem-42",
  "level": "2",
  "url": "section-RCSCSNS.html#theorem-42",
  "type": "Theorem",
  "number": "6.1.10",
  "title": "",
  "body": " The null space is a subspace. More precisely, if is an matrix, then is a subspace of .  "
},
{
  "id": "proof-20",
  "level": "2",
  "url": "section-RCSCSNS.html#proof-20",
  "type": "Proof",
  "number": "6.1.7.1",
  "title": "",
  "body": " Let . Then, and . Then,   and so . Also,   and so . Thus, is a subspace.  "
},
{
  "id": "section-LI",
  "level": "1",
  "url": "section-LI.html",
  "type": "Section",
  "number": "6.2",
  "title": "Linear Independence",
  "body": " Linear Independence  The concept of linear independence is crucial to linear algebra.   Linear Independence  An indexed set of vectors in is linearly independent if the vector equation, has only the trivial solution . That is, the only linear combination which gives is the trivial combination.  Otherwise, is linearly dependent . In other words, is linearly dependent if there exists , not all zero, such that,   The zero linear combination where is called the trivial linear combination. Any other linear combination is called non-trivial . Then, a collection of vectors is dependent if there exists a non-trivial linear combination which adds up to .   The zero vector  The set is dependent, because for any . Similarly, is dependent, because for any (for example, ). More generally, any set containing the zero vector is dependent, because a non-trivial linear combination would to have a weight of 1 on and 0 for every other vector. More precisely, for ,     A single vector  A set containing a single vector is linearly independent if and only if is non-zero. This is because the equation has only the trivial solution if . If , then has non-trivial solutions (any non-zero value for ).    Set with two vectors  Consider a set with two vectors , and consider the equation,  If are linearly dependent, then at least one of are non-zero. If say , then by solving for ,  In other words, is a scalar multiple of . Conversely, if one vector is a scalar multiple of the other, say , then . This is a non-trivial linear combination of , and so is a linearly dependent set.  Geometrically, two vectors are linearly independent if and only if they lie on the same line through the origin.   In summary,   A set of two vectors is linearly dependent if at least one vector is a scalar multiple of the other. Otherwise, if neither vector is a scalar multiple of the other, then the set is linearly independent.   To determine if a set of vectors is linearly independent, this involves solving the vector equation,   for the coefficients . Recall that this is equivalent to solving the homogeneous system where the columns of are . Then, row reduce the augmented matrix . Recall that there is a non-trivial solution if and only if there is a free variable. Equivalently, if and only if there exists a non-zero vector in the null space. Thus, in summary,   Linear independence as a homogeneous system  Vectors are linearly independent if and only if for the matrix , the homogeneous system has only the trivial solution. Equivalently, if and only if .    Characterization of linear dependence  An indexed set of vectors in (where ) is linearly dependent if and only if at least one of the vectors in can be written as a linear combination of the others. In other words, there exists a vector that can be written as a linear combination of the other vectors . In other words,     If can be written as a linear combination of the other vectors, say . Then, subtracting on both sides,   is a non-trivial linear dependence relation (since at least the coefficient of is non-zero). Thus, is linearly dependent.  Conversely, let be linearly dependent. Then, there exists scalars , not all zero, such that,   Then, suppose that . Then, solving for ,   Thus, can be written as a linear combination of the other vectors.    Vectors in  Consider three vectors in . This set will be linearly dependent if and only if lies in the plane spanned by and .    If a set contains more vectors than there are entries in each vector, then the set is linearly dependent. In other words, for vectors in , if , then the set is linearly dependent.    Let . Then, is an matrix, so the homogeneous equation has equations and variables. If , then there are more varibles than equations, so there is at least one free variable. Thus, has a non-trivial solution, so the columns of are linearly dependent.   Note that this does not say that if , then the set is linearly independent.   "
},
{
  "id": "definition-52",
  "level": "2",
  "url": "section-LI.html#definition-52",
  "type": "Definition",
  "number": "6.2.1",
  "title": "",
  "body": "An indexed set of vectors in is linearly independent if the vector equation, has only the trivial solution . That is, the only linear combination which gives is the trivial combination. "
},
{
  "id": "definition-53",
  "level": "2",
  "url": "section-LI.html#definition-53",
  "type": "Definition",
  "number": "6.2.2",
  "title": "",
  "body": "Otherwise, is linearly dependent . In other words, is linearly dependent if there exists , not all zero, such that,  "
},
{
  "id": "p-578",
  "level": "2",
  "url": "section-LI.html#p-578",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trivial non-trivial "
},
{
  "id": "example-39",
  "level": "2",
  "url": "section-LI.html#example-39",
  "type": "Example",
  "number": "6.2.3",
  "title": "The zero vector.",
  "body": " The zero vector  The set is dependent, because for any . Similarly, is dependent, because for any (for example, ). More generally, any set containing the zero vector is dependent, because a non-trivial linear combination would to have a weight of 1 on and 0 for every other vector. More precisely, for ,   "
},
{
  "id": "example-40",
  "level": "2",
  "url": "section-LI.html#example-40",
  "type": "Example",
  "number": "6.2.4",
  "title": "A single vector.",
  "body": " A single vector  A set containing a single vector is linearly independent if and only if is non-zero. This is because the equation has only the trivial solution if . If , then has non-trivial solutions (any non-zero value for ).  "
},
{
  "id": "example-41",
  "level": "2",
  "url": "section-LI.html#example-41",
  "type": "Example",
  "number": "6.2.5",
  "title": "Set with two vectors.",
  "body": " Set with two vectors  Consider a set with two vectors , and consider the equation,  If are linearly dependent, then at least one of are non-zero. If say , then by solving for ,  In other words, is a scalar multiple of . Conversely, if one vector is a scalar multiple of the other, say , then . This is a non-trivial linear combination of , and so is a linearly dependent set.  Geometrically, two vectors are linearly independent if and only if they lie on the same line through the origin.  "
},
{
  "id": "theorem-43",
  "level": "2",
  "url": "section-LI.html#theorem-43",
  "type": "Theorem",
  "number": "6.2.6",
  "title": "",
  "body": " A set of two vectors is linearly dependent if at least one vector is a scalar multiple of the other. Otherwise, if neither vector is a scalar multiple of the other, then the set is linearly independent.  "
},
{
  "id": "theorem-44",
  "level": "2",
  "url": "section-LI.html#theorem-44",
  "type": "Theorem",
  "number": "6.2.7",
  "title": "Linear independence as a homogeneous system.",
  "body": " Linear independence as a homogeneous system  Vectors are linearly independent if and only if for the matrix , the homogeneous system has only the trivial solution. Equivalently, if and only if .  "
},
{
  "id": "theorem-45",
  "level": "2",
  "url": "section-LI.html#theorem-45",
  "type": "Theorem",
  "number": "6.2.8",
  "title": "Characterization of linear dependence.",
  "body": " Characterization of linear dependence  An indexed set of vectors in (where ) is linearly dependent if and only if at least one of the vectors in can be written as a linear combination of the others. In other words, there exists a vector that can be written as a linear combination of the other vectors . In other words,   "
},
{
  "id": "proof-21",
  "level": "2",
  "url": "section-LI.html#proof-21",
  "type": "Proof",
  "number": "6.2.1.1",
  "title": "",
  "body": " If can be written as a linear combination of the other vectors, say . Then, subtracting on both sides,   is a non-trivial linear dependence relation (since at least the coefficient of is non-zero). Thus, is linearly dependent.  Conversely, let be linearly dependent. Then, there exists scalars , not all zero, such that,   Then, suppose that . Then, solving for ,   Thus, can be written as a linear combination of the other vectors.  "
},
{
  "id": "example-42",
  "level": "2",
  "url": "section-LI.html#example-42",
  "type": "Example",
  "number": "6.2.9",
  "title": "Vectors in <span class=\"process-math\">\\(\\mathbb{R}^3\\)<\/span>.",
  "body": " Vectors in  Consider three vectors in . This set will be linearly dependent if and only if lies in the plane spanned by and .  "
},
{
  "id": "theorem-46",
  "level": "2",
  "url": "section-LI.html#theorem-46",
  "type": "Theorem",
  "number": "6.2.10",
  "title": "",
  "body": " If a set contains more vectors than there are entries in each vector, then the set is linearly dependent. In other words, for vectors in , if , then the set is linearly dependent.  "
},
{
  "id": "proof-22",
  "level": "2",
  "url": "section-LI.html#proof-22",
  "type": "Proof",
  "number": "6.2.1.2",
  "title": "",
  "body": " Let . Then, is an matrix, so the homogeneous equation has equations and variables. If , then there are more varibles than equations, so there is at least one free variable. Thus, has a non-trivial solution, so the columns of are linearly dependent.  "
},
{
  "id": "section-B",
  "level": "1",
  "url": "section-B.html",
  "type": "Section",
  "number": "6.3",
  "title": "Basis of a Vector Space",
  "body": " Basis of a Vector Space   Basis of a Subspace  Subspaces typically contain an infinite number of vectors, so it is useful to determine a small set of vectors in the subspace which span the subspace. That is, a minimal set of vectors that span the subspace. This set of vectors which span a space is called a basis .   A basis of a subspace of is a linearly independent set that spans .    The standard basis vectors  Recall the standard basis vectors. In , they are given by,   In , they are given by,   and more generally, in , they are given by,   In general, the th standard basis vector has a 1 in its th component and 0's everywhere else. In each case, these vectors are linearly independent, and span . The fact that they span is clear, because any vector can be written as the linear combination,   Also, they are linearly independent, because they form the matrix equation , which of course is equivalently , so there is only the trivial solution.    Alternate bases  In fact, for any invertible matrix (of size ), its columns forms a basis of . This is because, if a matrix is invertible, its columns form a linearly independent set of vectors, which spans .  In this way, bases for a subspace are highly non-unique.    Basis of the null space  Recall that the null space of is the solution set of . When this solution set is written in parametric vector form, the vectors form a basis for .     Basis of the Column Space   The pivot columns of a matrix form a basis for the column space of .   Note that the pivot columns of form a basis, not the pivot columns of the RREF of . In fact, often the columns of the RREF of A will not be in the column space of .   "
},
{
  "id": "definition-54",
  "level": "2",
  "url": "section-B.html#definition-54",
  "type": "Definition",
  "number": "6.3.1",
  "title": "",
  "body": " A basis of a subspace of is a linearly independent set that spans .  "
},
{
  "id": "example-43",
  "level": "2",
  "url": "section-B.html#example-43",
  "type": "Example",
  "number": "6.3.2",
  "title": "The standard basis vectors.",
  "body": " The standard basis vectors  Recall the standard basis vectors. In , they are given by,   In , they are given by,   and more generally, in , they are given by,   In general, the th standard basis vector has a 1 in its th component and 0's everywhere else. In each case, these vectors are linearly independent, and span . The fact that they span is clear, because any vector can be written as the linear combination,   Also, they are linearly independent, because they form the matrix equation , which of course is equivalently , so there is only the trivial solution.  "
},
{
  "id": "example-44",
  "level": "2",
  "url": "section-B.html#example-44",
  "type": "Example",
  "number": "6.3.3",
  "title": "Alternate bases.",
  "body": " Alternate bases  In fact, for any invertible matrix (of size ), its columns forms a basis of . This is because, if a matrix is invertible, its columns form a linearly independent set of vectors, which spans .  In this way, bases for a subspace are highly non-unique.  "
},
{
  "id": "example-45",
  "level": "2",
  "url": "section-B.html#example-45",
  "type": "Example",
  "number": "6.3.4",
  "title": "Basis of the null space.",
  "body": " Basis of the null space  Recall that the null space of is the solution set of . When this solution set is written in parametric vector form, the vectors form a basis for .  "
},
{
  "id": "theorem-47",
  "level": "2",
  "url": "section-B.html#theorem-47",
  "type": "Theorem",
  "number": "6.3.5",
  "title": "",
  "body": " The pivot columns of a matrix form a basis for the column space of .  "
},
{
  "id": "section-DAR",
  "level": "1",
  "url": "section-DAR.html",
  "type": "Section",
  "number": "6.4",
  "title": "Dimension and Rank",
  "body": " Dimension and Rank   Recall that bases of a subspace are not unique. However, it turns out that all bases of a given subspace contain the same number of vectors. That is, if a subspace has a basis consisting of vectors, then every basis of contains exactly vectors. This number is called the dimension of .    Dimension of a Subspace   The dimension of a non-zero subspace , denoted by , is the number of vectors in any basis of . The dimension of the zero subspace is defined to be 0.    The space  Intuitively, the vector space has dimension . Recall that the standard basis of includes vectors, so any basis of has vectors.    Dimension of the null space  The dimension of the null space of a matrix is, by definition, equal to the number of vectors in its basis. Recall that there is one vector for every free variable, and so the dimension is equal to the number of free variables when solving .     Rank of a Matrix   The rank of a matrix , denoted by , is the dimension of the column space of . In other words,    Then, the rank is also the number of pivot columns (recall that the dimension of is equal to the number of pivot columns).   Dimension of the column space  Consider the dimension of the column space of a matrix. Recall that the pivot columns of form a basis of . Thus, the dimension of is the number of pivot columns of .   Together, the dimension of the column space is the number of pivot columns, and the dimension of the null space is the number of non-pivot columns. For an matrix, there are columns in total. Thus, in summary,   Rank theorem  Let be a matrix with columns. Then,    In particular, if say , then .   The basis theorem  Let be a -dimensional subspace of (i.e. ). Then, every linearly independent set of vectors is a basis of . Also, every set of vectors that spans is a basis of .     Rank and the Invertible Matrix Theorem   Let be an matrix. Then, the following are each equivalent to the statement that is invertible:   The columns of form a basis of .  The columns of span , .  .  has full rank, .  .  .     "
},
{
  "id": "definition-55",
  "level": "2",
  "url": "section-DAR.html#definition-55",
  "type": "Definition",
  "number": "6.4.1",
  "title": "",
  "body": " The dimension of a non-zero subspace , denoted by , is the number of vectors in any basis of . The dimension of the zero subspace is defined to be 0.  "
},
{
  "id": "example-46",
  "level": "2",
  "url": "section-DAR.html#example-46",
  "type": "Example",
  "number": "6.4.2",
  "title": "The space <span class=\"process-math\">\\(\\mathbb{R}^n\\)<\/span>.",
  "body": " The space  Intuitively, the vector space has dimension . Recall that the standard basis of includes vectors, so any basis of has vectors.  "
},
{
  "id": "example-47",
  "level": "2",
  "url": "section-DAR.html#example-47",
  "type": "Example",
  "number": "6.4.3",
  "title": "Dimension of the null space.",
  "body": " Dimension of the null space  The dimension of the null space of a matrix is, by definition, equal to the number of vectors in its basis. Recall that there is one vector for every free variable, and so the dimension is equal to the number of free variables when solving .  "
},
{
  "id": "definition-56",
  "level": "2",
  "url": "section-DAR.html#definition-56",
  "type": "Definition",
  "number": "6.4.4",
  "title": "",
  "body": " The rank of a matrix , denoted by , is the dimension of the column space of . In other words,   "
},
{
  "id": "example-48",
  "level": "2",
  "url": "section-DAR.html#example-48",
  "type": "Example",
  "number": "6.4.5",
  "title": "Dimension of the column space.",
  "body": " Dimension of the column space  Consider the dimension of the column space of a matrix. Recall that the pivot columns of form a basis of . Thus, the dimension of is the number of pivot columns of .  "
},
{
  "id": "theorem-48",
  "level": "2",
  "url": "section-DAR.html#theorem-48",
  "type": "Theorem",
  "number": "6.4.6",
  "title": "Rank theorem.",
  "body": " Rank theorem  Let be a matrix with columns. Then,   "
},
{
  "id": "theorem-49",
  "level": "2",
  "url": "section-DAR.html#theorem-49",
  "type": "Theorem",
  "number": "6.4.7",
  "title": "The basis theorem.",
  "body": " The basis theorem  Let be a -dimensional subspace of (i.e. ). Then, every linearly independent set of vectors is a basis of . Also, every set of vectors that spans is a basis of .  "
},
{
  "id": "theorem-50",
  "level": "2",
  "url": "section-DAR.html#theorem-50",
  "type": "Theorem",
  "number": "6.4.8",
  "title": "",
  "body": " Let be an matrix. Then, the following are each equivalent to the statement that is invertible:   The columns of form a basis of .  The columns of span , .  .  has full rank, .  .  .   "
},
{
  "id": "section-CS",
  "level": "1",
  "url": "section-CS.html",
  "type": "Section",
  "number": "6.5",
  "title": "Coordinate Systems",
  "body": " Coordinate Systems   Coordinate Systems  Recall that a basis is a spanning set, in that every vector can be written as some linear combination of basis vectors. In addition, bases are useful because it turns out that every vector in a subspace can be written uniquely as a linear combination of a basis of .   Unique Representation theorem Let be a basis of . Then, for every , there exist unique weights such that,    Suppose that has two representations as linear combinations of , say and . Then, subtracting these two representations,   Then, since is linearly independent, every weight must be equal to 0. Thus, for every , or for every . That is, the representations are the same.    Let be a basis of a subspace . Then, for , the coordinates of relative to the basis  are the weights such that , and the vector,   is called the coordinate vector of relative to .   Intuitively, the coordinates of a vector are a name for that uniquely identifies it among all vectors in . In this way, each basis acts as a different naming system. Alternatively, different bases can be thought of as different reference frames or different points of view on a given vector.  Then, consider the question of how to deterine the coordinates of a vector , given its coordinates in the standard basis.   Motivating example  Consider , and the basis , where . Consider the vector (in the standard basis coordinates), and consider the coordinates of this vector in the basis . The coordinates of relative to , by definition, satisfy the equation,   Or, in matrix form,   Then, determining involves solving this linear system, for example either by using row operations, or using inverse matrices. Using either method, the solution is , and so , and,    More generally, in , let be a basis, and let be a vector (specified in the standard basis). Then, if , then by definition,   In other words, the following equation holds,   The matrix is denoted by , and is called the change-of-coordinates matrix from to the standard basis in . Then,   i.e. left-multiplication by converts the coordinate vector into . Conversely, the columns of form a basis of (by assumption), so is invertible. Then,   i.e. left-multiplication by the inverse of the change-of-coordinates matrix converts to its coordinate vector .    Change of Basis  Different bases may be useful for different purposes. It is useful to understand how to convert a vector from one coordinate system using one basis, to another coordinate system with another basis.   Motivating example: Two bases in  Consider two bases, , and let have coordinates . Then, consider the coordinates of with respect to , say . Then, by definition,   and,   Again, the goal is to solve for . The key here is that we need to know how to represent the basis vectors in terms of the new basis vectors . For this example, suppose that and . Then, to determine in terms of , we can substitute the relation between and ,   Thus,    More generally, let , and let,   Then,   Thus,   Notice that this can be decomposed in terms of a matrix-vector product,   Denoting this matrix by ,   Here, is a matrix which converts vectors in coordinates to coordinates (hence the subscript ). Also, the columns of are the coordinates of the basis vectors of in terms of coordinates.  This generalizes to vectors in .   Change of basis  Let be bases of . Then, there is a unique matrix , called the change-of-coordinates matrix from to , such that,   Further, the columns of are the coordinates vectors of the basis with respect to ,    The matrix is invertible, because its columns form a collection of linearly independent vectors, because they are coordinate vectors of the linearly independent set . Then,   Notice that this is a generalization of the previous matrix which converted from the standard basis to . By above, the change-of-coordinates matrix has columns given by the coordinates of the basis with respect to the standard basis . Since is given in terms of the standard basis, we have that,    "
},
{
  "id": "theorem-51",
  "level": "2",
  "url": "section-CS.html#theorem-51",
  "type": "Theorem",
  "number": "6.5.1",
  "title": "Unique Representation theorem.",
  "body": " Unique Representation theorem Let be a basis of . Then, for every , there exist unique weights such that,  "
},
{
  "id": "proof-23",
  "level": "2",
  "url": "section-CS.html#proof-23",
  "type": "Proof",
  "number": "6.5.1.1",
  "title": "",
  "body": " Suppose that has two representations as linear combinations of , say and . Then, subtracting these two representations,   Then, since is linearly independent, every weight must be equal to 0. Thus, for every , or for every . That is, the representations are the same.  "
},
{
  "id": "definition-57",
  "level": "2",
  "url": "section-CS.html#definition-57",
  "type": "Definition",
  "number": "6.5.2",
  "title": "",
  "body": " Let be a basis of a subspace . Then, for , the coordinates of relative to the basis  are the weights such that , and the vector,   is called the coordinate vector of relative to .  "
},
{
  "id": "example-49",
  "level": "2",
  "url": "section-CS.html#example-49",
  "type": "Example",
  "number": "6.5.3",
  "title": "Motivating example.",
  "body": " Motivating example  Consider , and the basis , where . Consider the vector (in the standard basis coordinates), and consider the coordinates of this vector in the basis . The coordinates of relative to , by definition, satisfy the equation,   Or, in matrix form,   Then, determining involves solving this linear system, for example either by using row operations, or using inverse matrices. Using either method, the solution is , and so , and,   "
},
{
  "id": "p-635",
  "level": "2",
  "url": "section-CS.html#p-635",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "change-of-coordinates matrix "
},
{
  "id": "example-50",
  "level": "2",
  "url": "section-CS.html#example-50",
  "type": "Example",
  "number": "6.5.4",
  "title": "Motivating example: Two bases in <span class=\"process-math\">\\(\\mathbb{R}^2\\)<\/span>.",
  "body": " Motivating example: Two bases in  Consider two bases, , and let have coordinates . Then, consider the coordinates of with respect to , say . Then, by definition,   and,   Again, the goal is to solve for . The key here is that we need to know how to represent the basis vectors in terms of the new basis vectors . For this example, suppose that and . Then, to determine in terms of , we can substitute the relation between and ,   Thus,   "
},
{
  "id": "theorem-52",
  "level": "2",
  "url": "section-CS.html#theorem-52",
  "type": "Theorem",
  "number": "6.5.5",
  "title": "Change of basis.",
  "body": " Change of basis  Let be bases of . Then, there is a unique matrix , called the change-of-coordinates matrix from to , such that,   Further, the columns of are the coordinates vectors of the basis with respect to ,   "
},
{
  "id": "section-ITD",
  "level": "1",
  "url": "section-ITD.html",
  "type": "Section",
  "number": "7.1",
  "title": "Introduction to Determinants",
  "body": " Introduction to Determinants  The determinant is a number associated with a matrix, which provides information about its invertibility, as well as information about its associated linear transformation. More precisely, the determinant in an operation (or function) on a matrix, i.e. whose input is a matrix, and output is a real number.   Determinants  There are a few motivations for the determinant. One is as a criterion for invertibility of a matrix, which recall is equivalent to a corresponding system of equations having a unique solution. In particular, a matrix is invertible if and only if the system of equations has a unique solution.  First, consider the most basic case, of a matrix, of the form , which corresponds to the coefficient matrix of the single-equation system,  Or, in matrix form, The inverse of is the matrix , provided that . Equivalently, the unique solution to the system is , again provided that . In general, we will define the determinant in such a way so that a matrix is invertible if and only if its determinant is non-zero. In this way, we define the determinant of a matrix as the entry itself.   For a matrix , the determinant of is .   For a matrix, of the form,  which corresponds to the system, Recall that the matrix is invertible if and only if . Equivalently, recall that the system has a unique solution, provided that . This difference of the products of the diagonals we will define as the determinant of a matrix.  For a matrix , the determinant of , , is defined by,    The notation represents the determinant as a function, with argument . That is, the determinant can be thought of as a function whose input is a (square) matrix, and output is a number. When writing the matrix explcitly, we could write,   Determinants are also denoted with vertical bars, as, , or more explicitly,   Intuitively, these vertical bars are like absolute value bars, because it turns out that the determinant of a matrix can be thought of in some sense as a magnitude or size of the matrix, as we will see later.    Determinants of Matrices  For matrices and larger, determinants become more complex. Let be a matrix,  Similarly, we want to define the determinant as a number depending on the entries of the matrix, which is equal to zero precisely when the matrix is not invertible. Suppose that is invertible. Then, we want to determine what restrictions this places on the entries of , through the row reduction of . First, recall that being invertible implies that is row equivalent to , and (since is square) has a pivot in every row and column. Then, first, there is at least one non-zero entry in the first column. Without loss of generality, assume that (otherwise, row interchange to get a pivot in the first row). Then, multiply rows 2 and 3 by , and subtract suitable multiples of row 1, to get,   Notice that we normally would have instead done,   which also obtains 0's below the first pivot. However, these row operations leads to fractional entries, which just makes the computations more complicated.  Next, again since has a pivot in every column, at least one of the -entry or the -entry is non-zero. Without loss of generality, assume that the -entry is non-zero (otherwise, use a row interchange). Then, to obtain a 0 in the -entry, multiply row 3 by , and add times row 2 to row 3. This results in,   and finally,   Then, this matrix is row equivalent to only if the -entry is non-zero. In other words, the following expression is non-zero,   By assumption, , so this entry is non-zero if and only if the other factor is non-zero,   It turns out that the converse is also true, that if this quantity is non-zero, then the matrix is invertible. For now,   Let be a matrix. Then, the determinant of , , is defined by,    This definition is notationally complex and difficult to remember, so there are multiple alternate interpretations which make hand computations easier.  One pattern is that this is a combination of 6 terms, and each term is a product of 3 entries in the matrix, of one entry from each row and each column.    Determinants of Larger Matrices  In general, computing determinants is difficult.   "
},
{
  "id": "definition-58",
  "level": "2",
  "url": "section-ITD.html#definition-58",
  "type": "Definition",
  "number": "7.1.1",
  "title": "",
  "body": " For a matrix , the determinant of is .  "
},
{
  "id": "definition-59",
  "level": "2",
  "url": "section-ITD.html#definition-59",
  "type": "Definition",
  "number": "7.1.2",
  "title": "",
  "body": " For a matrix , the determinant of , , is defined by,   "
},
{
  "id": "definition-60",
  "level": "2",
  "url": "section-ITD.html#definition-60",
  "type": "Definition",
  "number": "7.1.3",
  "title": "",
  "body": " Let be a matrix. Then, the determinant of , , is defined by,   "
},
{
  "id": "section-CR",
  "level": "1",
  "url": "section-CR.html",
  "type": "Section",
  "number": "7.2",
  "title": "Cramer's Rule",
  "body": " Cramer's Rule   Recall that for a system of the form,  Its (unique) solution is given by,  where , and provided that .  More explicitly,  Notice that the numerator has the form of a determinant, being a difference of products. For , has a similar form as , except with and instead of and , respectively. Thus, the numerator is, Similarly, for , here and replace and , respectively, and so the numerator is, Thus, the unique solution can be written as a ratio of two determinants, Consider the pattern in the numerator matrix we are taking the determinant of. If we consider and to be the 1st and 2nd variables, respectively, then for the th variable, the matrix in the numerator is the coefficient matrix, with the th column replaced by the constant vector .   The Case  A similar pattern is true for a system,  It turns out that, Again, the denominator determinants are the determinant of the coefficient matrix, and the numerator determinant of the th variable is the determinant of the coefficient matrix with the th column replaced by the constant vector .   Cramer's Rule  This pattern generalizes to any system of equations in unknowns, and the resulting theorem is called Cramer's rule . First, for an matrix and vector , let denote the matrix obtained from by replacing column by the vector ,   Then,   Cramer's rule  Let be an matrix, . Then, if is invertible, then the unique solution of the linear system has entries given by,    Cramer's rule gives a concise and rather explcit form of the solution of a linear system. However, it isn't particularly useful for solving linear systems, because it involves evaluating many determinants, making it very inefficient. Computing just one determinant takes about as much work as solving by row reduction.  On the other hand, it is useful for other theoretical calculations. For example, it can be used to examine how the sensitivity of the solution of , i.e. how the solutions changes when the entires of changes.   "
},
{
  "id": "theorem-53",
  "level": "2",
  "url": "section-CR.html#theorem-53",
  "type": "Theorem",
  "number": "7.2.1",
  "title": "Cramer's rule.",
  "body": " Cramer's rule  Let be an matrix, . Then, if is invertible, then the unique solution of the linear system has entries given by,   "
},
{
  "id": "section-POD",
  "level": "1",
  "url": "section-POD.html",
  "type": "Section",
  "number": "7.3",
  "title": "Properties of Determinants",
  "body": " Properties of Determinants   Determinants and Row Operations  The key to computing determinants efficiently is to consider how determinants are affected when the entries of a matrix change. In particular, by elementary row operations.  First, consider the case. Let be a matrix, with determinant . Consider how this determinant is affected by row operations.   For scaling, say row 1 is scaled by , The determinant is also scaled by .  For row exchange, consider exchanging row 1 and 2, This row operations changes the sign of the determinant.  For row replacement, say , This row operation doesn't change the value of the determinant.   It turns out these properties are true for determinants of any size matrix.   Determinants and elementary row operations  Let be a square matrix, be the matrix resulting from after a single row operation. Then,   If a multiple of row row is added to another row, then .  If two rows are interchanged, then .  If one row is scaled by , then .    In particular, only row interchanges and scalings affect the value of the determinant.    Evaluating Determinants of Higher Order  The preceding properties of determinants leads to a method for evaluating determinants, which is particularly efficient for higher-order matrices. Consider a square matrix . First, use row reduction to convert to REF. Matrices in REF are upper triangular, so denote this matrix by . Then, the determinant of is the product of its diagonal entries. Then, the determinant of will be a multiple of the determinant of ,   where is the product of all of the constant factors and sign changes accumulated by row interchanges and scalings. In particular, if we perform the conversion to REF without using scaling operations (which recall is possible to do), then,   where is the number of row exchanges.  This is the algorithm that most computer programs use to evaluate determinants.    Determinants and Invertibility  The previous algorithm for evalauting determinants also provides theoretical insight into the relationship between invertibility and determinants.  If is invertible, then all of the diagonal entries of are pivots, and so the diagonal entries of will all be non-zero. Otherwise, if is not invertible, then at least one of the diagonal entires of will be equal to 0. This implies that , and so also. This proves the main theorem relating determinants and invertible matrices.   Invertible if and only if non-zero determinant  A square matrix is invertible if and only if .     Number of Operations for Computing Determinants  Determinant of an matrix has order .    In Python, implement a program that computes determinants using row reduction, and the product of the diagonal elements of a matrix.   "
},
{
  "id": "theorem-54",
  "level": "2",
  "url": "section-POD.html#theorem-54",
  "type": "Theorem",
  "number": "7.3.1",
  "title": "Determinants and elementary row operations.",
  "body": " Determinants and elementary row operations  Let be a square matrix, be the matrix resulting from after a single row operation. Then,   If a multiple of row row is added to another row, then .  If two rows are interchanged, then .  If one row is scaled by , then .   "
},
{
  "id": "theorem-55",
  "level": "2",
  "url": "section-POD.html#theorem-55",
  "type": "Theorem",
  "number": "7.3.2",
  "title": "Invertible if and only if non-zero determinant.",
  "body": " Invertible if and only if non-zero determinant  A square matrix is invertible if and only if .  "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-POD.html#exercise-4",
  "type": "Exercise",
  "number": "7.3.5.1",
  "title": "",
  "body": "In Python, implement a program that computes determinants using row reduction, and the product of the diagonal elements of a matrix. "
},
{
  "id": "section-27",
  "level": "1",
  "url": "section-27.html",
  "type": "Section",
  "number": "8.1",
  "title": "Vector Spaces and Subspaces",
  "body": " Vector Spaces and Subspaces   Previously, we defined a vector space broadly as a set which is closed under addition and scalar multiplication. This definition works to identify as a vector space, however, vector spaces are actually more general than just for collections of real numbers.  The vector space , and its operations of addition and scalar multiplication satisfy certain basic and simple properties. In fact, many other mathematical objects, such as matrices, polynomials, and functions, also satisfy these properties, given suitable definitions of addition and scalar multiplication. This leads to the more abstract definition of a vector space, that encapsulates all of these ideas.    Vector Spaces  A vector space is a non-empty set of objects, called vectors , on which are defined two operations, called addition and scalar multiplication by scalars (real numbers), that satisfy the following axioms. For all vectors , and all scalars ,  Closure under addition and scalar multiplication , the sum of and , , is in , and the scalar multiple of , , is in  Associativity , .  Commutativity , .  Additive identity , there exists a zero vector such that .  Additive inverse , for every , there exists a vector such that .  Associativity of scalar multiplication , .  Scalar multiplication distributes over addition , .  Vector distributes over scalar addition , .  Multiplicative identity , .    Strictly speaking, this definition is for a real vector space. We could also consider a complex vector space, where the scalars are complex numbers rather than real numbers.   The coordinate spaces are the motivating example of a vector space. The examples from and will provide intuition for more abstract spaces.    Arrows in Space  Consider the set of all arrows (directed line segments) in 2-dimensional space. Two arrows are defined to be equal if and only if they have the same length and point in the same direction. Define addition by the parallelogram rule. For and scalar , define scalar multiplication as the arrow with length times the length of , pointing in the same direction as and otherwise pointing in the opposire direction. Then, is a vector space. The zero vector is an arrow with 0 length. The negative of is . Then, the vector space axioms can be verified using geometry. Similarly, the set of all arrows in 3-dimensional space is also a vector space.    Doubly infinite sequences  Consider the set of doubly infinite sequences, of the form,   If are two elements of , then the sum is the sequence forming by adding corresponding elements of and . The scalar multiple is the sequence . Then, is a vector space. The set is called the set of signals , because each element represent the measurement of a signal at discrete times. For example, in engineering, electrical signal, mechanical signal, optimal signal, etc.     Subspaces      Subspace Spanned by a Set  First, we define analogous notions for an arbitrary vector space. Let be a vector space.   Let be vectors, be scalars. Then, the vector given by,   is called a linear combination of with weights  .   Let be vectors. The span of , denoted by , is the set of all linear combinations of . In other words,    Span is a subspace . Let . Then, is a subspace of .   Then, the set is called the subspace spanned (or generated ) by . For any subspace of , a set of vectors in is called a spanning (or generating ) set if .    Polynomial Spaces  Certain sets of polynomials also act as a vector space. For , let be the set of all polynomials of degree at most ,   Here, the degree of a polynomial is its highest power of , with a non-zero coefficient. For the polynomial with all coefficients equal to 0 (the zero polynomial), its degree is defined to be (so it is lower than any ).  Then, for are elements in , then their sum is defined by adding corresponding components,   For a scalar , the scalar multiple is given by,   In linear algebra, polynomials are thought of as primarily being objects, or expressions, and not as polynomial functions , with an input and an ouput .  Polynomial spaces have applications in statistical trend analysis of data.  Note that the set of all polynomials of degree is not a vector space, because subtracting two polynomials of degree and with the same leading coefficient, results in a polynomial which does not have degree (it is has degree less than ). Thus, the set is not closed under addition.    Function Spaces  Let be the set of all real-valued functions defined on a set (typically, is the set of real numbers of some interval on the real line). Two functions are equal if and only if their values are equal for every . For , their sum is defined by . For a scalar , the scalar multiple is defined as . Then, is a vector space. The zero vector is the zero function, the function which is identically zero, i.e. for every . The negative of is .   "
},
{
  "id": "definition-61",
  "level": "2",
  "url": "section-27.html#definition-61",
  "type": "Definition",
  "number": "8.1.1",
  "title": "",
  "body": "A vector space is a non-empty set of objects, called vectors , on which are defined two operations, called addition and scalar multiplication by scalars (real numbers), that satisfy the following axioms. For all vectors , and all scalars ,  Closure under addition and scalar multiplication , the sum of and , , is in , and the scalar multiple of , , is in  Associativity , .  Commutativity , .  Additive identity , there exists a zero vector such that .  Additive inverse , for every , there exists a vector such that .  Associativity of scalar multiplication , .  Scalar multiplication distributes over addition , .  Vector distributes over scalar addition , .  Multiplicative identity , .   "
},
{
  "id": "example-51",
  "level": "2",
  "url": "section-27.html#example-51",
  "type": "Example",
  "number": "8.1.2",
  "title": "",
  "body": " The coordinate spaces are the motivating example of a vector space. The examples from and will provide intuition for more abstract spaces.  "
},
{
  "id": "example-52",
  "level": "2",
  "url": "section-27.html#example-52",
  "type": "Example",
  "number": "8.1.3",
  "title": "Arrows in Space.",
  "body": " Arrows in Space  Consider the set of all arrows (directed line segments) in 2-dimensional space. Two arrows are defined to be equal if and only if they have the same length and point in the same direction. Define addition by the parallelogram rule. For and scalar , define scalar multiplication as the arrow with length times the length of , pointing in the same direction as and otherwise pointing in the opposire direction. Then, is a vector space. The zero vector is an arrow with 0 length. The negative of is . Then, the vector space axioms can be verified using geometry. Similarly, the set of all arrows in 3-dimensional space is also a vector space.  "
},
{
  "id": "example-53",
  "level": "2",
  "url": "section-27.html#example-53",
  "type": "Example",
  "number": "8.1.4",
  "title": "Doubly infinite sequences.",
  "body": " Doubly infinite sequences  Consider the set of doubly infinite sequences, of the form,   If are two elements of , then the sum is the sequence forming by adding corresponding elements of and . The scalar multiple is the sequence . Then, is a vector space. The set is called the set of signals , because each element represent the measurement of a signal at discrete times. For example, in engineering, electrical signal, mechanical signal, optimal signal, etc.  "
},
{
  "id": "definition-62",
  "level": "2",
  "url": "section-27.html#definition-62",
  "type": "Definition",
  "number": "8.1.5",
  "title": "",
  "body": " Let be vectors, be scalars. Then, the vector given by,   is called a linear combination of with weights  .  "
},
{
  "id": "definition-63",
  "level": "2",
  "url": "section-27.html#definition-63",
  "type": "Definition",
  "number": "8.1.6",
  "title": "",
  "body": "Let be vectors. The span of , denoted by , is the set of all linear combinations of . In other words,  "
},
{
  "id": "theorem-56",
  "level": "2",
  "url": "section-27.html#theorem-56",
  "type": "Theorem",
  "number": "8.1.7",
  "title": "Span is a subspace.",
  "body": " Span is a subspace . Let . Then, is a subspace of .  "
},
{
  "id": "p-711",
  "level": "2",
  "url": "section-27.html#p-711",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subspace spanned generated spanning generating set "
},
{
  "id": "p-713",
  "level": "2",
  "url": "section-27.html#p-713",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "degree "
},
{
  "id": "section-EAE",
  "level": "1",
  "url": "section-EAE.html",
  "type": "Section",
  "number": "9.1",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors   Dissect the action of a linear transformation into elements which are easily visualized.  Eigenvalues and eigenvectors have applications in pure and applied mathematics, and appear in settings far more general than we consider here. Applications to differential equations and continuous dynamical systems, physics and chemistry.  Consider a linear transformation in . In general, such a trasformation will perform some kind of stretch, rotation, and\/or reflection to an input vector. However, sometimes, there are particular vectors for which the transformation only scales the vector, say to (here, is the Greek letter lambda). In , this means that the output vector is parallel to the input. In matrix form, this means that,   These special vectors are called eigenvectors for the matrix. Of course, the zero vector trivially satisfies this condition, because for any matrix , and for any scalar . Thus, we are concerned with non-zero vectors which satisfy this equation. The scalar is called an eigenvalue .    Eigenvalues and Eigenvectors   Let be an matrix. Then, a non-zero vector is an eigenvector , associated with eigenvalue  , if    The term eigenvalue and eigenvector comes from the German word Eigenwert, meaning proper value .  Again, in (or ), an eigenvector of is a vector which is parallel to itself after transformation by . More precisely, if , then is parallel to , and if , then is anti-parallel to .    Determining Eigenvalues and Eigenvectors  Let be an matrix, and consider the eigenvectors of . Let be an eigenvector of , with eigenvalue . Then, by definition, . Rearranging this equation,   The two terms on the left-hand side can be combined by writing as (where is the identity matrix), and factoring out  ,   The expression is a matrix, so this forms a homogeneous system of linear equations. Then, recall that a homogeneous system has a non-zero soloution (here, for ) if and only if the coefficient matrix is not invertible, which recall occurs when its determinant is equal to 0, or   We can reverse all of this reasoning. If for some particular choice of , then has a non-zero solution, and so this scalar and solution are associated eigenvalue and eigenvector.  Thus, to determine eigenvalues, solve the equation for . Then, for each eigenvalue , to find an associated eigenvector, solve the homogeneous system for a vector . In summary,   Determining eigenvalues and eigenvectors  Let be an matrix. Then, is an eigenvalue of if,   and, the eigenvectors associated with are the non-zero solutions for in the homogeneous system,    Note that the matrix is just with subtracted from each entry on the main diagonal.    The Eigenspace  For an eigenvalue , the set of all solutions to the equation,   is just the null space of the matrix . In particular, this set is a subspace of , and is called the eigensapce of corresponding to .    Computing Eigenvalues   The eigenvalues of a triangular matrix are the entries on its main diagonal.     The Characteristic Equation  Recall that eigenvalues are solutions to the equation . Then, evaluating a determinant involves some sum and products of the entries of the matrix, so in this case involves sums and products of expressions involving . In this way, the resulting equation is a polynomial equation in . In particular, it is an th degree polynomial equation.   Let be an matrix. Then, the characteristic polynomial of , is given by,    Then, eigenvalues are precisely the roots of the characteristic polynomial, and the equation is called the characteristic euquation .  Polynomial equations can be solved exactly for low degree polnomials, however, for even moderately large (say ), polynomial equations can't be solved exactly, in general. For these and larger systems, numerical root-finding methods are used to solve for eigenvalues approximately.  Also, for this reason, eigenvalues should not be computed by hand, except for possibly matrices, which result in quadratic equations. For even matrices, these lead to a cubic equation, which in general is difficult to solve by hand, unless the numbers are chosen precisely.   "
},
{
  "id": "definition-64",
  "level": "2",
  "url": "section-EAE.html#definition-64",
  "type": "Definition",
  "number": "9.1.1",
  "title": "",
  "body": " Let be an matrix. Then, a non-zero vector is an eigenvector , associated with eigenvalue  , if   "
},
{
  "id": "theorem-57",
  "level": "2",
  "url": "section-EAE.html#theorem-57",
  "type": "Theorem",
  "number": "9.1.2",
  "title": "Determining eigenvalues and eigenvectors.",
  "body": " Determining eigenvalues and eigenvectors  Let be an matrix. Then, is an eigenvalue of if,   and, the eigenvectors associated with are the non-zero solutions for in the homogeneous system,   "
},
{
  "id": "p-736",
  "level": "2",
  "url": "section-EAE.html#p-736",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "eigensapce "
},
{
  "id": "theorem-58",
  "level": "2",
  "url": "section-EAE.html#theorem-58",
  "type": "Theorem",
  "number": "9.1.3",
  "title": "",
  "body": " The eigenvalues of a triangular matrix are the entries on its main diagonal.  "
},
{
  "id": "definition-65",
  "level": "2",
  "url": "section-EAE.html#definition-65",
  "type": "Definition",
  "number": "9.1.4",
  "title": "",
  "body": " Let be an matrix. Then, the characteristic polynomial of , is given by,   "
},
{
  "id": "p-740",
  "level": "2",
  "url": "section-EAE.html#p-740",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic euquation "
},
{
  "id": "section-LU",
  "level": "1",
  "url": "section-LU.html",
  "type": "Section",
  "number": "10.1",
  "title": "Matrix Factorizations, LU Factorziation",
  "body": " Matrix Factorizations, LU Factorziation  Recall that factoring an algebraic expression involves writing it as a product of two or more expressions, and is helpful in various ways. A factorization of a matrix expresses it as a product of two or more matrices.   LU Factorization  Let be an matrix. Suppose that can be converted to row echelon form without using row exchanges. Then, can be written in the form , where is an lower triangular matrix, amnd is an upper triangular matrix.  The matrix is the REF of , and so is naturally upper triangular. The matrix is the product of the elementary matrices used to convert to , so it is just the identity matrix with additional non-zero entries below the diagonal, corresponding to the row replacements and scaling row operations.   This is called an LU factorization of . The matrix is called unit lower triangular ( ULT ) because it is lower triangular and it has all 1's on the main diagonal.  If the LU factorization of exists, , then the linear system becomes , or, . Then, to solve this system for , we can do it in two parts. First, find the vector(s) such that . Then, find the vectors such that . Both of these systems are easy to solve because their coefficient matrices are triangular. In this way, we solve the original system by solving two simpler systems.  Intuitively, we are peeling back the layers of .    Performing LU Factorization  If can be reduced to row echelon form using only row replacements which add a multiple of one row to another row below it , then there exists elementary matrices (say there are steps) which are all unit lower triangular, such that,   Then,   Thus, , where,   It turns out that indeed, is ULT, because all of are ULT, and the fact that the product of ULT matrices is ULT, and the inverse of a ULT matrix is ULT.  The product of unit lower triangular matrices is unit lower triangular.  If is ULT, then is invertible, and is also ULT.  To prove this, we will prove that is row equivalent to . The entries below the -entry can be changed to 0 by adding a multiple of row 1. Since row 1 has no other non-zero entries, the -entry is unaffected. Also, this row operation only affects the first column of , below the main diagonal. Next, the -entry is the next pivot, which can be used to change all entries below it to 0 by row replacement. Similarly, the -entry is the only non-zero entry in its row of , so the other entries, in particular the -entry, is not affected. Also, this row operation only affects the 2nd column of , below the main diagonal. Continuing in this way, the diagonal entries are all of the pivots, and is reduced to , so is invertible, and the augmented matrix is . Each row operation only adds multiples of the pivot rows to rows below it, so is unit lower triangular.    Algorithm for LU Factorization  It turns out that computing is much easier than computing . That is, inverting each elementary matrix first and then taking their product, is easier than computing the product first and then inverting.    Number of Operations for LU Factorization  Recall that for an arbitrary matrix , converting to REF requires about flops. Then, further performing back substitution on this (upper triangular) REF matrix requires about flops.  Then, suppose we want to consider many linear systems with the same coefficient matrix, (note here just denotes arbitray constant vectors, and not necessarily denote the column vectors of a matrix ). To solve each of these systems individually would require performing row reduction and back substitution, so a total of for each system. Then, in total, this would be . Instead, using LU factorization, we perform the row reduction once to determine , and determine by the matrix inverse procedure. In general, computing matrix inverses is difficult, but for elementary matrices, there are very few non-zero entries, so the multiplication and inversion is very fast. Thus, in total, we will say about .  Then, for each system, we perform back substitution for the systems , each requiring flops, which together is . Thus, in total, there are,    "
},
{
  "id": "p-745",
  "level": "2",
  "url": "section-LU.html#p-745",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "LU factorization unit lower triangular ULT "
},
{
  "id": "theorem-59",
  "level": "2",
  "url": "section-LU.html#theorem-59",
  "type": "Theorem",
  "number": "10.1.1",
  "title": "",
  "body": "The product of unit lower triangular matrices is unit lower triangular. "
},
{
  "id": "theorem-60",
  "level": "2",
  "url": "section-LU.html#theorem-60",
  "type": "Theorem",
  "number": "10.1.2",
  "title": "",
  "body": "If is ULT, then is invertible, and is also ULT. "
},
{
  "id": "proof-24",
  "level": "2",
  "url": "section-LU.html#proof-24",
  "type": "Proof",
  "number": "10.1.2.1",
  "title": "",
  "body": "To prove this, we will prove that is row equivalent to . The entries below the -entry can be changed to 0 by adding a multiple of row 1. Since row 1 has no other non-zero entries, the -entry is unaffected. Also, this row operation only affects the first column of , below the main diagonal. Next, the -entry is the next pivot, which can be used to change all entries below it to 0 by row replacement. Similarly, the -entry is the only non-zero entry in its row of , so the other entries, in particular the -entry, is not affected. Also, this row operation only affects the 2nd column of , below the main diagonal. Continuing in this way, the diagonal entries are all of the pivots, and is reduced to , so is invertible, and the augmented matrix is . Each row operation only adds multiples of the pivot rows to rows below it, so is unit lower triangular. "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
