# Menu Driven Programme

import Employee as e
import Attendance as a
import Salary as f
import Allowance as x

print("*"*142)
print("                                                 ......PAYROLL MANAGEMENT SYSTEM.......                ")
print("*"*142)

while True:
    print("1. Employee Menu")
    print("2. Attendance Menu")
    print("3. Sallary Menu")
    print("4. Allowance menu")
    print("5. Quit")
    
    ch=int(input("Enter your choice : "))   
    if ch==1:
        print("#"*142)
        print("                                                 ......Employee Menu.......                          ")
        print("#"*142)
        while True :
            print("1.Add New Employee")
            print("2.Display Employee Details")
            print("3.Search Employee Details")
            print("4.Delete Employee Details")
            print("5.Modify Employee Details")
            print("6.Return to Main menu")
            s=int(input("Enter your choice : "))
            if s==1:
                e.Add_New_Employee()
            elif s==2:
                e.Display_Employee()
            elif s==3:
                e.Search_Employee()
            elif s==4:
                e.Delete_Employee()
            elif s==5:
                e.Modify_Employee()
            elif s==6:
                break
            else :
                print("Enter The Correct Choice!")
                continue
            print("="*142)
        pass

    if ch==2:
        print("#"*142)
        print("                                                 ......Employee Menu.......                          ")
        print("#"*142)
        while True :
            print("1.Add New Employee Attendance")
            print("2.Display Employee Attendance")
            print("3.Search Employee Attendance")
            print("4.Delete Employee Attendance")
            print("5.Modify Employee Attendance")
            print("6.Return to Main menu")
            s=int(input("Enter your choice : "))
            if s==1:
                a.Add_Employee_Attendance()
            elif s==2:
                a.Display_Employee_Attendance()
            elif s==3:
                a.Search_Employee_Attandance()
            elif s==4:
                a.Delete_Employee_Attendance()
            elif s==5:
                a.Modify_Employee_Attendance()
            elif s==6:
                break
            else :
                print("Enter The Correct Choice!")
                continue
            print("="*142)
        pass
   

    elif ch==3:
        print("~"*142)
        print("                                                 ......Salary Menu.......                          ")
        print("~"*142)
        while True :
            print("1.Add New Salary List")
            print("2.Display Salary List")
            print("3.Search Salary List")
            print("4.Delete Salary List")
            print("5.Modify Salary List")
            print("6.Return to Main menu")
            m=int(input("Enter your choice : "))
            if m==1:
                f.Add_Salary()
            elif m==2:
                f.Display_Salary()
            elif m==3:
                f.Search_Salary()
            elif m==4:
                f.Delete_Salary()
            elif m==5:
                f.Modify_Salary()
            elif m==6:
                break
            else :
                print("Enter The Correct Choice!")
                continue
            print("="*142)
        pass

    elif ch==4:
        print("#"*142)
        print("                                                 ......Allowane Menu.......                          ")
        print("~"*142)
        while True :
            print("1.Add Allowance List")
            print("2.Display Allowance List")
            print("3.Search Allowance List")
            print("4.Delete Allowance List")
            print("5.Modify Allowance List")
            print("6.Return to Main menu")
            s=int(input("Enter your choice : "))
            if s==1:
                x.Add_Allowance()
            elif s==2:
                x.Display_Allowance()
            elif s==3:
                x.Search_Allowance()
            elif s==4:
                x.Delete_Allowance()
            elif s==5:
                x.Modify_Allowance()
            elif s==6:
                break
            else :
                print("Enter The Correct Choice!")
                continue
            print("="*142)
        pass
    elif ch==5:
        pass
    else:
        print("Enter The Correct Choice!")
    print("#*"*142)
    print("                                                 ......Programme End.......                          ")

