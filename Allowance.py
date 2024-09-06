# Allowance Module

import mysql.connector as s
from tabulate import tabulate

import mysql.connector as s
conn=s.connect(host="localhost", user="root", password="0786", database="Payroll")
if conn.is_connected()==False:
    print("Error in Database Connecting")
else:
    cur=conn.cursor()

def Add_Allowance():

    emp_code=int(input("Enter the employee code : "))
    emp_name=input("Enter the name of the employee : ")
    a=input("Enter the First allowance : ")
    b=input("Enter the Second allowance : ")
    c=input("Enter the Third allowance : ")
    cur.execute("insert into allowance values(%s,%s,%s,%s,%s)",(emp_code, emp_name, a, b, c))
    conn.commit()


def Display_Allowance():
    
    cur.execute("select * from allowance")
    a=cur.fetchall()
    if a==None:
        print("No record found!")
    else:
        print(tabulate(a,headers=['emp_code','emp_name', 'emp_ph', 'emp_dept', 'emp_date_of_join', 'emp_add'],tablefmt='psql'))

def Search_Allowance():

    n=input("Enter the employee code whose Allowance to be searched : ")
    cur.execute("select * from allowance where emp_code=%s",(n,))
    a=cur.fetchone()
    if a==None:
        print("Record Not found!")
    else :
        print(a)

def Delete_Allowance():

    m=int(input("Enter the Employee code of the employee to be deleted : "))
    cur.execute("select * from allowance where emp_code=%s",(m,) )
    a=cur.fetchone()
    print(a)
    c=input("Do you want to delete this record y/n : ")
    if c=="y" or c=="Y":
            cur.execute("Delete from allowance  where emp_code=%s",(m,))
            conn.commit()
            print("Record Deleted Successfully.")
    else:
            print("Task Aborted!")

def Modify_Allowance():

    p=int(input("Enter the employee code of the employee the modified : "))
    cur.execute("select * from allowance where emp_code=%s",(p,))
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
                cur.execute("update allowance set emp_name=%s where emp_code=%s",(name,p))
            FA=int(input("Enter First Allowance or press enter to skip : "))
            if FA=="":
                pass
            else:
                cur.execute("update allowance set FA=%s where emp_code=%s",(FA,p))
            SA=input("Enter the Second Allowance from or press enter to skip : ")
            if SA=="":
                pass
            else:
                cur.execute("update allowance set SA=%s where emp_code=%s",(SA,p))
            TA =int(input("Enter the Third Allowance or press enter to skip : "))
            if TA=="":
                pass
            else:
                cur.execute("update allowance set salary_to=%s where emp_code=%s",(TA,p))
            
        else:
            print("Task Aborted!")
