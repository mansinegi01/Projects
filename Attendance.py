


# Attendance Module

import mysql.connector as s
from tabulate import tabulate

import mysql.connector as s
conn=s.connect(host="localhost", user="root",password="0786", database ="payroll")
if conn.is_connected()==False:
    print("Database not conected")
else:
    cur=conn.cursor()

def Add_Employee_Attendance():
    emp_code=int(input("Enter the employee code : "))
    Day = input("Type the number of days of this month : ")
    Month = input("Type today's Month in Number.")
    Year = input("Type today's Years : ")
    g=int(input("Enter the no. of days employee was present : "))
    h=int(input("Enter the no. of days employee was absent : "))
    cur.execute("insert into Attendance values(%s,%s,%s,%s,%s,%s)",(emp_code, Day, Month, Year, g, h))
    conn.commit()

def Display_Employee_Attendance():
    cur.execute("select*from Attendance")
    a=cur.fetchall()
    if a==None:
        print("No record found!")
    else:
        print(tabulate(a,headers=['emp_code','Day', 'Month', 'Year', 'g','h',],tablefmt='psql')) 

def Search_Employee_Attandance():
    x=int(input("Enter the employee code of employee to be searched : "))
    cur.execute("select * from Attendance where emp_code=%s",(x,))
    a=cur.fetchone()
    if a==None:
        print("Record Not found")
    else:
        print(a)  

def Delete_Employee_Attendance():
    m=int(input("Enter the Employee code of the employee to be deleted : "))
    cur.execute("select * from attendance where emp_code=%s",(m,) )
    a=cur.fetchone()
    print(a)
    c=input("Do you want to delete this record y/n : ")
    if c=="y" or c=="Y":
            cur.execute("Delete from attendance  where emp_code=%s",(m,))
            conn.commit()
            print("Record Deleted Successfully.")
    else:
            print("Task Aborted!")

def Modify_Employee_Attendance():

    p=int(input("Enter the employee code to be Modified : "))
    cur.execute("select * from Attendance where emp_code=%s",(p,))
    a=cur.fetchone()
    if a==None:
        print("Record not found")
    else:
        print(tabulate(headers=['emp_code','Day', 'Month', 'Year', 'g', 'h'],tablefnt='psql'))
        print(a)
        P=input("Do you want to modify this record y/n:")
        if P=="y" or P=="Y":
            Day=int(input("Enter new Day or press enter to skip : "))
            if Day=="":
                pass
            else:
                cur.execute("update Attendance set Day=%s where emp_code=%s",(Day,p))
            Month=input("Enter Employee new Month or press enter to skip : ")
            if Month=="":
                pass
            else:
                cur.execute("update Attendance set Month=%s where emp_code=%s",(Month,p))
            Year=int(input("Enter Employee new Year or press enter to skip:"))
            if Year=="":
                pass
            else:
                cur.execute("update Attendance set Year=%s where emp_code=%s",(Year,p))
            g=input("Enter the days of month in which of the employee was present : ")
            if g=="":
                pass
            else:
                cur.execute("update Attendance set g=%s where emp_code=%s",(g,p))
            h=input("Enter the days of month in which of the employee was present : ")
            if h=="":
                pass
            else:
                cur.execute("update Attendance set h=%s where emp_code=%s",(h,p))
        else:
            print("Task Aborted!") 
