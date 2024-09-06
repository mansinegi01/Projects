# Salary Module
import mysql.connector as s
from tabulate import tabulate

conn=s.connect(host="localhost", user="root", password="0786", database="payroll")
if conn.is_connected()==False:
    print("Error in Database Connecting")
else:
    cur=conn.cursor()

def Add_Salary():
    emp_code=int(input("Enter the Employee Code : "))
    emp_name=input("Enter the Employee Name : ")
    emp_dept=input("Enter the Department of Employee  : ")
    Salary=int(input("Enter the salar of the Employee : "))
    cur.execute("insert into salary values(%s,%s,%s,%s)",(emp_code, emp_name, emp_dept, Salary))
    conn.commit()



def Display_Salary():

    cur.execute("select * from salary")
    a=cur.fetchall()
    if a==None:
        print("No record found!")
    else:
        print(tabulate(a,headers=['emp_code','emp_name', 'emp_dept','Salary'],tablefmt='psql'))

def Search_Salary():

    n=input("Enter the employee code to be searched : ")
    cur.execute("select * from salary where emp_code=%s",(n,))
    a=cur.fetchone()
    if a==None:
        print("Record Not found!")
    else :
        print(a)

def Delete_Salary():

    m=int(input("Enter the Employee code of the employee to be deleted : "))
    cur.execute("select * from salary where emp_code=%s",(m,) )
    a=cur.fetchone()
    print(a)
    c=input("Do you want to delete this record y/n : ")
    if c=="y" or c=="Y":
            cur.execute("Delete from salary  where emp_code=%s",(m,))
            conn.commit()
            print("Record Deleted Successfully.")
    else:
            print("Task Aborted!")

def Modify_Salary():

    p=int(input("Enter the employee code of the employee the modified : "))
    cur.execute("select * from salary where emp_code=%s",(p,))
    a=cur.fetchone()
    if a==None:
        print("Record not found!")
    else:
        print(a)
        abc=input("Do you want to modify this record y/n : ")
        if abc=="y" or abc=="Y":
            name=input("Enter the New Employee Name or press enter to skip : ")
            if name=="":
                pass
            else:
                cur.execute("update salary set emp_name=%s where emp_code=%s",(name,p))
            dept=input("Enter new department or press enter to skip : ")
            if dept=="":
                pass
            else:
                cur.execute("update salary set emp_dept=%s where emp_code=%s",(dept),p)
            Salary=int(input("Enter Employee salary from or press enter to skip : "))
            if Salary=="":
                pass
            else:
                cur.execute("update salary set Salary=%s where emp_code=%s",(Salary),p)
            
            
        else:
            print("Task Aborted!")
