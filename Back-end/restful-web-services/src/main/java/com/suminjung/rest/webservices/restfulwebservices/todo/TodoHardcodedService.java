package com.suminjung.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

@Service
@CrossOrigin(origins="http://localhost:4200")
public class TodoHardcodedService {
 
	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "in28minutes", "Learn to Dance", new Date(), false));
		todos.add(new Todo(++idCounter, "in28minutes", "Learn about Microservices", new Date(), false));
		todos.add(new Todo(++idCounter, "in28minutes", "Learn about Angular", new Date(), false));
	}
	
	public List<Todo> findAll() {
		return todos;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		
<<<<<<< HEAD
		if(todo==null) return null;
		
		if(todos.remove(todo)) {
			return todo;
		}
		return null;  
=======
		if(todo==null) {
			return null;
		} else if (todos.remove(todo)) {
			return todo;
		} 
		return null;
>>>>>>> 219d496... Created DELETE Request
	}

	public Todo findById(long id) {
		for(Todo todo:todos) {
			if(todo.getId() == id) {
				return todo;
<<<<<<< HEAD
			}
		}
		
		return null;
	}
	
=======
			} 
	}
		return null;

}
>>>>>>> 219d496... Created DELETE Request
}