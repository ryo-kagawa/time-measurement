# time-measurement

JavaScriptの処理時間を計測する開発用ユーティリティーです  
~~~
timeMeasurement(function() {return targetFunction()}, "uniqName");
// uniqName nowTime 10 count 10 avgTime 9.3333333333333333 maxTime 12 minTime 8

~~~
第二引数で指定した名称単位で統計を取ります  
出力形式はこうなっています  
第二引数で指定した名前 nowTime 今回処理に掛かった時間 count 何回目の処理か avgTime 平均時間 maxTime 最大時間 minTime 最小時間
