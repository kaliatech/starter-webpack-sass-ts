import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

@Controller
@EnableAutoConfiguration
public class Proto1ServerMain {

    @RequestMapping("/")
    String home(Model model) {
        //return "Hello World 3!";
        return "index";
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Proto1ServerMain.class, args);
    }

}