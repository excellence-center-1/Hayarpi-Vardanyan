#include<iostream>
using namespace std;
void inputArray(int arr[],int n){
        for(int i=0;i<n;i++)
        {cout<<"arr["<<i<<"]=";
                cin>>arr[i];
        }
}
int main()
{
        const int n=8;
        int arr[n];
        int element=5;
        inputArray(arr,n);
        for(int i=0;i<n;i++)
        {
                if(arr[i]==element)
                cout<<i<<"  ";

                }

                return 0;
}

