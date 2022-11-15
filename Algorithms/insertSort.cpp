#include<iostream>
using namespace std;
const int n=5;
int main()
{
        int arr[n],a,j;
        for(int i=0;i<n;i++)
        {
                cout<<"arr["<<i<<"]=";
                cin>>arr[i];
        }
         for(int i=1;i<n;i++)
	 {
		 a=arr[i];
		 j=i-1;
		 while(j>=0 && arr[j]>a)
		 {
			 arr[j+1]=arr[j];
                          j--;
		 }
		 arr[j+1]=a;
	 }

         
         cout<<"Sorted array:  \n";
        for(int i=0;i<n;i++)
                cout<<arr[i]<<"   ";
        cout<<endl;
        return 0;
}

