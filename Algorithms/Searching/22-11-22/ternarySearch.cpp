#include<iostream>
using namespace std;
void inputArray(int arr[],int n){
	for (int i=0;i<n;i++)
	{
		cout<<"arr["<<i<<"]=";
		cin>>arr[i];
	}
}

void bubbleSort(int arr[],int n){
	int a;
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
}

int ternarySearch(int arr[],int low,int high,int element){
	if(high>=low)
	{
	int mid1=low+(high-low)/3;
	int mid2=high-(high-low)/3;
	if(arr[mid1]==element)
	 return mid1;
	if(arr[mid2]==element)
	 return mid2;
	if(element<arr[mid1])
	 return ternarySearch(arr,low,mid1-1,element);
	else
	if(element>arr[mid2])
	 return ternarySearch(arr,mid2+1,high,element);
	else
	 return ternarySearch(arr,mid1+1,mid2-1,element);
}
return -1;
}


int main()
{
	
	int n,arr[n];
	cout<<"n=";cin>>n;
	int element=10;
	inputArray(arr,n);
	cout<<"\n";
	bubbleSort(arr,n);
	cout<<"\n";
	int result=ternarySearch(arr,0,n-1,element);
	if(result==-1)
		cout<<"Error\n";
	else
		cout<<"index="<<result;
	return 0;
}
