# Payroll Module

import mysql.connector as s
from tabulate import tabulate

import mysql.connector as s
conn=s.connect(host="localhost", user="root",password="0786", database ="Payroll")
if conn.is_connected()==False:
    print("Database not conected")
else:
    cur=conn.cursor()

def Add_payroll_list():

    emp_code=int(input("Enter the employee code : "))
    emp_name=input("Enter the employee name : ")
    emp_dept=input("Enter the department of the employee : ")
    salary_from=int(input("Enter the date (Salary from) in YYYY_DD_MM format : "))
    salary_to=int(input("Enter the date (Salary to) in YYYY_DD_MM format : "))
    cur.execute("insert into payroll values(%s,%s,%s,%s,%s,%s)",(emp_code, emp_name, emp_dept, salary_from, salary_to ))
    conn.commit()

def Display_payroll_list():

    cur.execute("select * from payroll")
    a=cur.fetchall()
    if a==None:
        print("No record found!")
    else:
        print(tabulate(a,headers=['emp_code','emp_name', 'emp_ph', 'emp_dept', 'emp_date_of_join', 'emp_add'],tablefmt='psql'))
        

def Search_payroll_list():

    n=input("Enter the employee code to be searched : ")
    cur.execute("select * from payroll where emp_code=%s",(n,))
    a=cur.fetchone()
    if a==None:
        print("Record Not found!")
    else :
        print(a)

def Delete_payroll_list():

    m=int(input("Enter the Employee code of the employee to be deleted : "))
    cur.execute("select * from payroll where emp_code=%s",(m,) )
    a=cur.fetchone()
    print(a)
    c=input("Do you want to delete this record y/n : ")
    if c=="y" or c=="Y":
            cur.execute("Delete from payroll where emp_code=%s",(m,))
            conn.commit()
            print("Record Deleted Successfully.")
    else:
            print("Task Aborted!")

def Modify_payroll_list():

    p=int(input("Enter the employee code of the employee the modified : "))
    cur.execute("select * from payroll where emp_code=%s",(p,))
    a=cur.fetchone()
    if a==None:
        print("Record not found!")
    else:
        print(a)
        abc=input("Do you want to modify this record y/n : ")
        if abc=="y" or abc=="Y":
            name=input("Enter the New Employee Name or press enter to skip:")
            if name=="":
                pass
            else:
                cur.execute("update payroll set emp_name=%s where emp_code=%s",(name,p))
            department=int(input("Enter new employee department or press enter to skip : "))
            if department=="":
                pass
            else:
                cur.execute("update payroll set emp_dept=%s where emp_code=%s",(department,p))
            salary_from=input("Enter Employee salary from or press enter to skip : ")
            if salary_from=="":
                pass
            else:
                cur.execute("update payroll set salary_from=%s where emp_code=%s",(salary_from,p))
            salary_to =int(input("Enter Employee salary till or press enter to skip : "))
            if salary_to=="":
                pass
            else:
                cur.execute("update payroll set salary_to=%s where emp_code=%s",(salary_to,p))
            
        else:
            print("Task Aborted!")
