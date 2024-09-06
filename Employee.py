import mysql.connector as s
from tabulate import tabulate
conn=s.connect(host="localhost", user="root",password="0786", database ="payroll")
if conn.is_connected()==False:
    print("Database not connected")
else:
    cur=conn.cursor()


# Employee Module


def Add_New_Employee():
    emp_code=int(input("Enter the Employee Code : "))
    emp_name=input("Enter the Employee Name : ")
    emp_ph=int(input("Enter the Employee Phone No. : "))
    emp_dept=input("Enter the Department of Employee  : ")
    emp_date_of_join=input("Enter the Employee Date of Joining in(YYYY-MM-DD) format : ")
    emp_add=input("Enter the Employee Address : ")
    cur.execute("insert into Employee values(%s,%s,%s,%s,%s,%s)",(emp_code, emp_name, emp_ph, emp_dept,emp_add, emp_date_of_join))
    conn.commit()

def Display_Employee():
    cur.execute("select*from Employee")
    a=cur.fetchall()
    if a==None:
        print("No record found!")
    else:
        print(tabulate(a,headers=['emp_code','emp_name', 'emp_ph', 'emp_dept', 'emp_date_of_join', 'emp_add'],tablefmt='psql'))

def Search_Employee():
    x=int(input("Enter the employee code of employee to be searched : "))
    cur.execute("select * from Employee where emp_code=%s",(x,))
    a=cur.fetchone()
    if a==None:
        print("Record Not found")
    else:
        print(a) 

def Delete_Employee():
    m=int(input("Enter the Employee code of the employee to be deleted : "))
    cur.execute("select * from employee where emp_code=%s",(m,) )
    a=cur.fetchone()
    print(a)
    c=input("Do you want to delete this record y/n : ")
    if c=="y" or c=="Y":
            cur.execute("Delete from employee  where emp_code=%s",(m,))
            conn.commit()
            print("Record Deleted Successfully.")
    else:
            print("Task Aborted!")

 
def Modify_Employee():
    p=int(input("Enter the employee code to be Modified : "))
    cur.execute("select * from Employee where emp_code=%s",(p,))
    a=cur.fetchone()
    if a==None:
         print("Record not found")
    else:
        print(tabulate(a,headers=['emp_code','emp_name', 'emp_ph', 'emp_dept', 'emp_date_of_join', 'emp_add'],tablefmt='psql'))
        print(a)
        o=input("Do you want to modify this record y/n:")
        if o=="y" or o=="Y":
            name=input("Enter the New Employee Name or press enter to skip:")
            if name=="":
                pass
            else:
                cur.execute("update Employee set emp_name=%s where emp_code=%s",(name,p))
            phone=int(input("Enter new employee no. or press enter to skip : "))
            if phone=="":
                pass
            else:
                cur.execute("update Employee set emp_ph=%s where emp_code=%s",(phone,p))
            Dept=input("Enter Employee new Department or press enter to skip : ")
            if Dept=="":
                pass
            else:
                cur.execute("update Employee set emp_dept=%s where emp_code=%s",(Dept,p))
            doj =int(input("Enter Employee new date of joining in(YYYY-MM-DD or press enter to skip:"))
            if doj=="":
                pass
            else:
                cur.execute("update Employee set emp_date_of_join=%s where emp_code=%s",(doj,p))
            address=input("Enter the new address of the employee")
            if address=="":
                pass
            else:
                cur.execute("update Employee set emp_add=%s where emp_code=%s",(address,p))
        else:
            print("Task Aborted!")
