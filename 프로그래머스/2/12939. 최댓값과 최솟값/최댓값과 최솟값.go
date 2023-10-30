import (
    "fmt"
    "strconv"
    "strings"
)

func solution(s string) string {
    arr := strings.Split(s, " ")
    
    max, _ := strconv.ParseInt(arr[0], 0, 32)
    min := max
    
    for _, item := range arr {
        num, _ := strconv.ParseInt(item, 0, 32)
        if num < min {
            min = num
        } else if num > max {
            max = num
        }
    }
    return fmt.Sprintf("%d %d", min, max)
}