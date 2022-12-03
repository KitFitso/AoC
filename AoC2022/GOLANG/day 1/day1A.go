package main

import (
	"fmt"
	"io/ioutil"
	"strings"
)

func main() {
	data, err := ioutil.ReadFile("input.txt")

	if err != nil {
		fmt.Println("error reading file", err)
		return
	}

	input := strings.Split(string(data), "\n\n")

	for i := 0; i < len(input); i++ {
		fmt.Println(i, input[i])
	}
}
