#include<iostream>
#include<limits.h>
const int n=6;
using namespace std;
int minDist(int dist[],bool sptSet[]){
	int min=INT_MAX,minIndex;
	for(int i=0;i<n;i++)
	{	if(sptSet[i]==false && dist[i]<=min)
			min=dist[i],minIndex=i;
	}
			return minIndex;
	
}
void print(int dist[]){
        for(int i=0;i<n;i++)
                cout<<i<<"    "<<dist[i]<<endl;
}

void dijktra(int arr[n][n],int x){
	int dist[n];
	bool sptSet[n];
	for(int i=0;i<n;i++)
		dist[i]=INT_MAX,sptSet[i]=false;
	dist[x]=0;
	for(int j=0;j<n-1;j++)
	{int  y=minDist(dist,sptSet);
		sptSet[y]=true;
		for(int k=0;k<n;k++)
			if(!sptSet[k] && arr[y][k] && dist[y]!=INT_MAX	&& dist[y]+arr[y][k]<dist[k])
				dist[k]=dist[y]+arr[y][k];
	}
	print(dist);

}


int main()
{      
/*	int arr[n][n]={
	       {0,3,0,0,0,6},
	       {0,0,7,0,0,1},
	       {0,0,0,5,0,0},
	       {0,0,0,0,6,0},
	       {0,1,0,0,0,0},
	       {0,0,0,0,4,0},
	      };*/
	 int arr[n][n]={
        {0, 1, 2, 0, 0, 0},
        {1, 0, 0, 5, 1, 0},
        {2, 0, 0, 2, 3, 0},
        {0, 5, 2, 0, 2, 2},
        {0, 1, 3, 2, 0, 1},
        {0, 0, 0, 2, 1, 0}};
dijktra(arr,0);
return 0;
	}
