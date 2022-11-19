#include<iostream>
using namespace std;
void inputArray(int arr[],int n){
	for(int i=0;i<n;i++)
	{
		cout<<"arr["<<i<<"]=";
		cin>>arr[i];
	}
}
void bubbleSort(int arr[],int n){
	int a;
	for(int i=0;i<n-1;i++)
		for(int j=i+1;j<n;j++)
			if(arr[i]>arr[j])
	   {	a=arr[i];
		arr[i]=arr[j];
		arr[j]=a;	
	
	 }
	cout<<"sorted array \n";
	for(int i=0;i<n;i++)
		cout<<arr[i]<<"  ";
	cout<<endl;
}
int binarySearch(int arr[],int low,int high,int element){
            if(high>=low)
	    {
	int mid=low+(high-low)/2;
        if(arr[mid]==element)
		return mid;
	if(arr[mid]>element)
		return binarySearch(arr,low,mid-1,element);
	else
	     return binarySearch(arr,mid+1,high,element);
            }
	    return -1;//elementi chlinelu depqum
  }
int main()
{
const int n=8;
int arr[n];
int element=6;
inputArray(arr,n);
cout<<endl;
bubbleSort(arr,n);
int result=binarySearch(arr,0,n-1,element);
if(result==-1)
	cout<<"Error\n";
else
cout<<"index="<<result<<"\n";
return 0;
}
