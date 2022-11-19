#include<iostream>
using namespace std;
void inputArray(int arr[],int n){
        for(int i=0;i<n;i++)
        {cout<<"arr["<<i<<"]=";
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
int interpolationSearch(int arr[],int low,int high,int element){
        int mid;
	if(low<=high && element>=arr[low] && element<=arr[high])
	{
         mid=low+((element-arr[low])/(arr[high]-arr[low])*(high-low));
		 if(arr[mid]==element)
			 return mid;
	if(arr[mid]<element)
		return interpolationSearch(arr,mid+1,high,element);
	if(arr[mid]>element)
		return interpolationSearch(arr,low,mid-1,element);
}
	return -1;

}
int main()
{
        const int n=8;
        int arr[n];
        int element=5;
        inputArray(arr,n);
        cout<<"\n";
	bubbleSort(arr,n);
	cout<<"\n";
	int result=interpolationSearch(arr,0,n-1,element);
        if(result==-1)
		cout<<"error\n";
	else
		cout<<"index="<<result<<"\n";
                return 0;
}

