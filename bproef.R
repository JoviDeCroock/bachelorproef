bundles <- c(123, 154, 158)
names <- c('MobX', 'Redux', 'MST')
barplot(bundles, main="Bundle sizes", xlab="Library", ylab="Size in KB", names.arg=names)

performances <- c(2.61, 2.68, 2.66, 4.56, 4.78, 4.83)
renderTimeList <- as.table(matrix(performances, nrow=3, ncol=2))
colnames(renderTimeList)=c('Initial load', 'Time to first interaction')
rownames(renderTimeList)=c("MobX","Redux","MST")
barplot(renderTimeList, col=colors()[c(23,89,12)] , border="white", font.axis=2, beside=T, legend=rownames(renderTimeList), xlab="group", font.lab=2)

locs <- c(676, 870, 667)
barplot(locs, main="Lines of Code", xlab="Library", ylab="Lines", names.arg=names)

maintain <- c(82.44, 81.53, 82.08)
barplot(maintain, main="Maintainability", xlab="Library", ylab="Score", names.arg=names)
## Add text at top of bars
text(0.75, 80, '82.44')
text(2, 80, '81.53')
text(3, 80, '82.08')
