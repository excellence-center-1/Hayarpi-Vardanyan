#include<iostream>
using namespace std;
const int n=5;
int main()
{
	int arr[n],a;
	for(int i=0;i<n;i++)
	{
		cout<<"arr["<<i<<"]=";
		cin>>arr[i];
	}
         for(int i=0;i<n-1;i++)
	 for(int j=i+1;j<n;j++)
	   if( arr[i]>arr[j])
	   {	a=arr[i];
		arr[i]=arr[j];
		arr[j]=a;	
	
	 }
	 cout<<"Sorted array:  \n";
	for(int i=0;i<n;i++)
		cout<<arr[i]<<"   ";
	cout<<endl;
	return 0;
}
